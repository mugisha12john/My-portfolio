import { spawnSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
} from "node:fs";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const sourcePath = fileURLToPath(
  new URL("./resume/Jean_Baptiste_Mugisha_CV.docx", import.meta.url),
);
const outputPath = fileURLToPath(
  new URL("./public/myresume.pdf", import.meta.url),
);
// Snap-packaged LibreOffice has a private /tmp; use a shared project directory.
const workingDirectory = mkdtempSync(
  fileURLToPath(new URL("./resume/export-", import.meta.url)),
);

try {
  if (!existsSync(sourcePath)) {
    throw new Error(`Resume source not found: ${sourcePath}`);
  }

  const result = spawnSync(
    process.env.LIBREOFFICE_BIN || "libreoffice",
    [
      `-env:UserInstallation=${pathToFileURL(join(workingDirectory, "profile")).href}`,
      "--headless",
      "--nologo",
      "--nodefault",
      "--norestore",
      "--convert-to",
      "pdf:writer_pdf_Export",
      "--outdir",
      workingDirectory,
      sourcePath,
    ],
    { encoding: "utf8", timeout: 120_000 },
  );

  if (result.error) {
    throw new Error(
      "Could not run LibreOffice. Install it or set LIBREOFFICE_BIN to its executable path.",
      { cause: result.error },
    );
  }
  if (result.status !== 0) {
    throw new Error(`Resume conversion failed: ${result.stderr || result.stdout}`);
  }

  const convertedPath = join(workingDirectory, "Jean_Baptiste_Mugisha_CV.pdf");
  if (
    !existsSync(convertedPath) ||
    readFileSync(convertedPath).subarray(0, 5).toString() !== "%PDF-"
  ) {
    throw new Error(`LibreOffice did not create a valid PDF: ${result.stdout}`);
  }

  copyFileSync(convertedPath, outputPath);
  console.log("Resume updated at public/myresume.pdf");
} finally {
  rmSync(workingDirectory, { recursive: true, force: true });
}
