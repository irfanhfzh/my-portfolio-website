/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function NotFound() {
	return (
		<Layout type="notfound">
			<main className="grid place-items-center gap-8 my-20 tablet:my-[130px] lg:my-[200px]">
				<h1 className="font-bold text-9xl text-primary">404</h1>
				<p className="text-5xl font-bold text-primary">Not Found</p>
				<div className="text-center">
					<p className="text-lg text-white">Halaman tidak ditemukan!</p>
					<p className="text-lg text-white">
						Mohon kembali ke halaman{" "}
						<Link to="/" className="text-primary hover:underline">
							Home
						</Link>
					</p>
				</div>
			</main>
		</Layout>
	);
}

export default NotFound;
