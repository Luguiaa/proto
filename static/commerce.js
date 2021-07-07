const addToCart = (id) => {
  fetch(url, {
    body: `{"id":${id},"quantity":1}`,
    headers: {
      "X-Authorization":
        "pk_test_29874f362ea46d7b066b056cc5782f8419dacd9842b54",
      "Content-Type": "application/json",
    },
    method: "POST",
    redirect: "follow",
  }).then((response) => console.log("success"));
};
