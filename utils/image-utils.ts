export function convertGoogleDriveUrl(url: string): string {
  // Check if it's a Google Drive URL
  if (!url) return "/placeholder.svg"

  if (url.includes("drive.google.com/file/d/")) {
    // Extract the file ID
    const fileIdMatch = url.match(/\/d\/([^/]+)/)
    if (fileIdMatch && fileIdMatch[1]) {
      const fileId = fileIdMatch[1]
      // Return the direct link format
      return `https://drive.google.com/uc?export=view&id=${fileId}`
    }
  }

  // Return the original URL if it's not a Google Drive URL or if extraction fails
  return url
}
