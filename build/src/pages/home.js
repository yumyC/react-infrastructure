import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, Outlet } from 'react-router-dom';
const home = () => {
    return (_jsxs("div", { children: [_jsxs("div", { children: [_jsx(Link, Object.assign({ to: '/' }, { children: "Home" })), " | ", _jsx(Link, Object.assign({ to: 'about' }, { children: "about" }))] }), _jsx(Outlet, {})] }));
};
export default home;
//# sourceMappingURL=home.js.map