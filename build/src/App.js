import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, useNavigate } from "react-router-dom";
import { Grid, Container, Menu } from 'semantic-ui-react';
import './App.css';
const menuArray = [
    {
        'label': 'home',
        'url': '/home'
    },
    {
        'label': 'about',
        'url': '/about'
    },
    {
        'label': 'dashboard',
        'url': '/dashboard'
    },
];
function App() {
    const navigate = useNavigate();
    const items = menuArray.map((list, index) => ({
        key: String(index + 1),
        name: ` ${list.label}`,
        onClick: () => navigate(list.url)
    }));
    return (_jsx("div", Object.assign({ className: "App" }, { children: _jsx(Container, { children: _jsxs(Grid, { children: [_jsx(Grid.Column, Object.assign({ width: 4 }, { children: _jsx(Menu, { fluid: true, vertical: true, tabular: true, items: items }) })), _jsx(Grid.Column, Object.assign({ width: 12 }, { children: _jsx(Container, { children: _jsx(Outlet, {}) }) }))] }) }) })));
}
export default App;
//# sourceMappingURL=App.js.map