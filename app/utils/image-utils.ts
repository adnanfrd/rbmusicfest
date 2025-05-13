export function getImageUrl(path: string): string {
  // Check if the path is already a full URL
  if (path.startsWith("http")) {
    return path
  }

  // Check if the path starts with a slash
  if (!path.startsWith("/")) {
    path = `/${path}`
  }

  // Return the full path
  return path
}

export function getFallbackImageUrl(text: string): string {
  return `https://placehold.co/400x200/gray/white?text=${encodeURIComponent(text)}`
}
