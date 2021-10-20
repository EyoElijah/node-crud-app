$("#add_user").submit(function (event) {
	alert("Data Inserted Successfully");
});

$("#update_user").submit(function (event) {
	event.preventDefault();
	let unIndexed_array = $(this).serializeArray();
	let data = {};
	$.map(unIndexed_array, function (n, i) {
		data[n["name"]] = n["value"];
	});

	let request = {
		url: `http://localhost:5000/api/users/${data.id}`,
		method: "PUT",
		data: data,
	};
	$.ajax(request).done(function (response) {
		alert("Data updated successfully");
	});
});

if (window.location.pathname == "/") {
	$onDelete = $(".table tbody td a.delete");
	$onDelete.click(function () {
		let id = $(this).attr("data-id");

		let request = {
			url: `http://localhost:5000/api/users/${id}`,
			method: "DELETE",
		};
		if (confirm("Do you really want to delete this record?")) {
			$.ajax(request).done(function (response) {
				alert("Data deleted successfully");
				location.reload();
			});
		}
	});
}
