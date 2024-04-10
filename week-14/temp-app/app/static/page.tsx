export default function () {
    
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-blue-100 rounded-lg border-8 p-4 h-1/2 w-1/2 flex flex-col justify-between">
                <div className="text-4xl font-extrabold">
                    Welcome to Static Page
                </div>

                <div className="text-lg">
                This paragraph right here is rendered statically using Next.js.
    By generating the content on the server at build time,
    Next.js ensures that search engines can easily crawl and
    index this page, boosting its SEO. Plus, serving static
    content leads to faster load times and a smoother user
    experience. And if I need interactivity, Next.js allows me to
    use the "use client" directive for specific components.
    <br />
    <br />
    Pretty cool, right? Now navigate to the 'Client Page' to
    check how interactivity is added in Next.js!
                </div>
            </div>
        </div>
    )
}