const submitBtn = document.querySelector(".submit");
const emailInput = document.querySelector('[name="mail"]');
const passwordInput = document.querySelector('[name="password"]');

submitBtn.addEventListener("click", async (e) => {
	e.preventDefault();
	const email = emailInput.value;
	const password = passwordInput.value;
	const res = await fetch("http://localhost:8080/login", {
		method: "POST",
		body: {
			email,
			password,
		},
	});
	const data = await res.json();

	await fetch("http://localhost:8080/");
	console.log(data);
	// window.location.pathname = '/registro'
});
