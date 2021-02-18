// function Profile() {
//   const location = useLocation();
//   useEffect(() => {
//     const currentPath = location.pathname;
//     const searchParams = new URLSearchParams(location.search);
//   }, [location]);
//   return <p>Profile</p>;
// }

// function checkQuery() {
//   let newURL = new URL("http://localhost:3000/search?query=" + searchTerm);
//   let searchParams = new URLSearchParams(newURL.search);
//   for (let p of searchParams) {
//     console.log(p);
//   }
//   console.log(searchParams.toString());
// }
// checkQuery();
