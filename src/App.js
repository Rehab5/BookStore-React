import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { Book } from "./components/book";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import { BookDetails } from "./pages/bookDetails";
import { BookForm } from "./pages/bookForm";
import { SharedLayout } from "./layouts/sharedlayout";
import { getAllBooks } from "./api/bookApi";
import { Error } from "./layouts/error";
import Login from "./pages/login";
import { bookDetailsLoader, bookFormLoader } from "./loaders/loaders";
function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route
						path='book'
						loader={getAllBooks}
						element={<Book />}
						errorElement={<Error />}
					/>
					<Route path='book/:id' loader={bookDetailsLoader} element={<BookDetails />} errorElement={<Error />} />
					<Route path='book/:id/edit' loader={bookFormLoader} element={<BookForm />} errorElement={<Error />} />
					<Route path='login' element={<Login />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</>
		)
	);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
