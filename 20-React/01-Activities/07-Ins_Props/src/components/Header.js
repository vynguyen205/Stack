

export default function Header ({title, subtitle, size, color}) {
    if(color)
let stylez;
if(size === "large") {
 stylez = {height: 400, width: 400};
} else {
    stylez = {height: 200, width: 200};
}
    return (
        <header style={stylez}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        </header>
    )
}