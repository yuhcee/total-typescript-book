type MyObj = {
    foo: string;
    bar: number;
    baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
    // Autocomplete in here!
    foo: 'Uchenna',
    bar: 12,
    baz: true,
});

document.addEventListener(
    // Autocomplete this string!
    '',
    (event) => {
        console.log(event);
    }
);
