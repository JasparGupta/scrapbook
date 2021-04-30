export default function useTitle(title: string): void {
    typeof window !== 'undefined' && void (window.document.title = `Scrapbook | ${title}`);
}
