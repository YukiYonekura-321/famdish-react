export function Headline(props) {

    return (
        <div>
            <h1 className="text-2xl font-bold">
                Welcome to the {props.page} Page
            </h1>
            {props.paragraph}
            <p className="text-sm text-gray-500 mt-2">
                Let's make your {props.page} page
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={props.onClick}>
                Click Me
            </button>
        </div>
    );
}