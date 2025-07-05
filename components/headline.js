export function Headline(props) {
    return (
        <div>
            <h1 className="text-2xl font-bold">
                Welcome to the {props.page} Page
            </h1>
            <p className="text-lg mt-4">
                This is a simple headline component that can be reused across different pages.
            </p>
            <p className="text-sm text-gray-500 mt-2">
                Let's make your {props.page} page
            </p>
        </div>
    );
}