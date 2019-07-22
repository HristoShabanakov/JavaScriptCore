const kinveyUsername = 'guest';
const kinveyPassword = 'guest';
const appKey = 'kid_SyP3tbMGH';
const appSecret = '0c729ce2c6194a4abe8d56e7adb96a14';

const baseUrl = 'https://baas.kinvey.com/appdata/kid_SyP3tbMGH/books';

const elements = {
    btnSubmit: document.getElementById('submitBtn'),
    btnLoadBooks: document.getElementById('loadBooks'),
    btnCancelEdit: document.getElementById('cancelBtn'),
    btnDoneEdit: document.getElementById('editBtn'),
    inputTitle: document.getElementById('title'),
    inputAuthor: document.getElementById('author'),
    inputIsbn: document.getElementById('isbn'),
    tbodyBooks: document.querySelector('.tbodyBooks'),
    h3Form: document.getElementById('formHeader'),
}

elements.btnSubmit.addEventListener('click', addBook);
elements.btnLoadBooks.addEventListener('click', loadBooks);
elements.btnDoneEdit.addEventListener('click', editBook);
elements.btnCancelEdit.addEventListener('click', cancelEdit);

function addBook(ev) {
    //stop refreshing the page when Submit button is clicked.
    ev.preventDefault();

    let title = elements.inputTitle.value;
    let author = elements.inputAuthor.value;
    let isbn = elements.inputIsbn.value;

    //All input fields must contain data
    if (title && author && isbn) {
        const dataObject = {
            title,
            author,
            isbn
        }

        //When making post request we must write the method!
        const headers = {
            method: 'POST',
            body: JSON.stringify(dataObject), // info which will be sent to database
            credentials: 'include',
            Authorization: 'Basic' + btoa(`${kinveyUsername}:${kinveyPassword}`),
            headers: {
                "Content-type": "application/json"
            }
        };

        fetch(baseUrl, headers)
            .then(handler)
            .then(loadBooks)
            .catch(err => console.log(err));

        clearElementValue(elements.inputAuthor, elements.inputTitle, elements.inputIsbn);
    }
}

function loadBooks() {
    const headers = {
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
    }

    fetch(baseUrl, headers)
        .then(handler)
        .then((data) => {

            elements.tbodyBooks.innerHTML = '';

            data.forEach(book => {

                let trNextBook = document.createElement('tr');
                trNextBook.setAttribute('id', book._id);

                trNextBook.innerHTML = `<td> ${book.title}</td>
            <td> ${book.author}</td>
            <td> ${book.isbn}</td>
            <td>
                <button class="btnEdit" value=${book._id}>Edit</button>
                <button class="btnDelete" value=${book._id}>Delete</button>
            </td>`

                trNextBook.querySelector('button.btnEdit')
                    .addEventListener('click', () => loadEditForm(book._id));

                trNextBook.querySelector('button.btnDelete')
                    .addEventListener('click', () => deleteBook(book._id));


                elements.tbodyBooks.appendChild(trNextBook);

            })

        })
        .catch(err => console.error(err));
}

function loadEditForm(bookId) {
    let dataToEdit = document.getElementById(bookId)
        .querySelectorAll('td');

    elements.inputTitle.value = dataToEdit[0].textContent;
    elements.inputAuthor.value = dataToEdit[1].textContent;
    elements.inputIsbn.value = dataToEdit[2].textContent;

    elements.h3Form.textContent = 'EDIT BOOK';

    elements.btnSubmit.style.display = 'none';
    elements.btnDoneEdit.style.display = 'block';
    elements.btnCancelEdit.style.display = 'block';

    elements.btnDoneEdit.value = bookId;
}

function editBook(ev) {
    ev.preventDefault();

    let bookId = ev.target.value;
    ev.target.value = '';

    const bookData = {
        "title": elements.inputTitle.value,
        "author": elements.inputAuthor.value,
        "isbn": elements.inputIsbn.value,
    };

    let editUrl = `${baseUrl}/${bookId}`;

    let headers = {
        method: "PUT",
        body: JSON.stringify(bookData),
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch(editUrl, headers)
        .then(handler)
        .then(loadBooks)
        .catch(err => console.error(err));

    fromEditToSubmitForm();
}

function cancelEdit(ev) {
    ev.preventDefault();
    fromEditToSubmitForm();
}

function fromEditToSubmitForm() {
    clearElementValue(elements.inputAuthor, elements.inputTitle, elements.inputIsbn);

    elements.h3Form.textContent = "FORM";

    elements.btnSubmit.style.display = 'block';
    elements.btnDoneEdit.style.display = 'none';
    elements.btnCancelEdit.style.display = 'none';

}

function clearElementValue(...arguments) {
    arguments.forEach(element => {
        element.value = '';
    });
}

function deleteBook(bookId) {

    let deletetUrl = `${baseUrl}/${bookId}`;

    const headers = {
        method: "DELETE",
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch(deletetUrl, headers)
        .then(handler)
        .then(loadBooks)
        .catch(err => console.error(err));
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(response.status);
    }
    return response.json();
}