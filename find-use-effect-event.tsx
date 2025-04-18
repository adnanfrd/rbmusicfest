// This is a utility file to help us find any remaining instances of useEffectEvent
// We'll search through all files in the project

import { readFileSync, readdirSync } from "fs"
import { join } from "path"

function searchFilesForUseEffectEvent(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir)

  files.forEach((file) => {
    const filePath = join(dir, file)
    if (file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".js") || file.endsWith(".jsx")) {
      try {
        const content = readFileSync(filePath, "utf8")
        if (content.includes("useEffectEvent")) {
          fileList.push(filePath)
        }
      } catch (err) {
        console.error(`Error reading file ${filePath}:`, err)
      }
    }
  })

  return fileList
}

// Usage
const filesWithUseEffectEvent = searchFilesForUseEffectEvent("./")
console.log("Files containing useEffectEvent:", filesWithUseEffectEvent)
