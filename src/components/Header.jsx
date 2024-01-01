import logoURL from "../../public/tesla.svg";

export default function Header() {
	return (
		<>
			<header className="flex justify-between mt-5 flex-wrap font-sans text-sm font-medium">
				<span className="ml-10`">
					<img src={logoURL} className="w-32" alt="tesla logo" />
				</span>
				<nav className="flex gap-4">
					<h5>Model S</h5>
					<h5>Model 3</h5>
					<h5>Model X</h5>
					<h5>Model Y</h5>
					<h5>Solar Roof</h5>
					<h5>Solar Panels</h5>
				</nav>
				<span className="flex gap-4 mr-8">
					<p>Shop</p>
					<p>Account</p>
					<p>Menu</p>
				</span>
			</header>
		</>
	);
}
