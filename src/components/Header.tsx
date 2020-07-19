import React, { useState } from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import { PageHeader, Menu, DatePicker, Dropdown, Button } from "antd";
import config from "../config";
import { Route } from "antd/lib/breadcrumb/Breadcrumb";

function makeBreadcrumbs(path: string): Route[] {
	const parts = path.split("/").filter(Boolean),
		crumbs = parts.map((v, idx) => {
			const url = "/" + parts.slice(0, idx + 1).join("/");
			return {
				path: url,
				breadcrumbName: v,
			};
		});

	return [
		{
			path: "/",
			breadcrumbName: "Home",
		},
		...crumbs,
	];
}

const menu = [<NavLink to="/about">About</NavLink>, <a href="https://github.com/OneOfOne">OneOfOne's GitHub</a>].map((v, i) => (
	<Menu.Item key={i}>{v}</Menu.Item>
));

function DropdownMenu() {
	return (
		<Dropdown key="more" overlay={<Menu>{menu}</Menu>}>
			<Button
				style={{
					border: "none",
					padding: 0,
				}}>
				<EllipsisOutlined
					style={{
						fontSize: 20,
						verticalAlign: "top",
					}}
				/>
			</Button>
		</Dropdown>
	);
}

const Header: React.FC = () => {
	const location = useLocation(),
		[title, setTitle] = useState("");

	config.setHeaderRef("setTitle", setTitle);
	return (
		<PageHeader
			title={title || config.siteName}
			breadcrumb={{
				itemRender: (r) => (
					<NavLink activeClassName="active" to={r.path}>
						{r.breadcrumbName}
					</NavLink>
				),
				routes: makeBreadcrumbs(location.pathname),
			}}
			subTitle={title && config.siteName}
			extra={[
				<NavLink activeClassName="active" to="/">
					Home
				</NavLink>,
				<NavLink activeClassName="active" to="/profile">
					Me
				</NavLink>,
				<NavLink activeClassName="active" to="/profile/john">
					John
				</NavLink>,
				<DatePicker />,
				<DropdownMenu key="more" />,
			]}
		/>
	);
};

export default Header;
