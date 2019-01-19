function solve() {
	let title = document.getElementById('createTitle').value;
	let content = document.getElementById('createContent').value;
	

	//Create new article element only if title and content are not empty.
	//If title and content are empty strings && will return false.
	//We can use title==='' && content ==='';
	if(title && content){
		
		//Title value from the title input should be a heading 3 element <h3>
		let header3 = document.createElement('h3');
		//Content text from the textarea element should be a paragraph <p>
		let paragraph = document.createElement('p');

		let article = document.createElement('article');

		header3.textContent = title;
		paragraph.textContent = content;

		article.appendChild(header3);
		article.appendChild(paragraph);

		document.getElementById('articles').appendChild(article);
		
		document.getElementById('createTitle').value="";
		document.getElementById('createContent').value="";
	}
}