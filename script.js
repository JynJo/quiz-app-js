const choices = document.querySelector('.choices')
const choice = document.querySelector('.choice')
const question = document.querySelector('.question')
const questions = [
	{
		question: 'Question 1',
		choices: [
			{text: 'A', isCorrect: false},
			{text: 'B', isCorrect: false},
			{text: 'C', isCorrect: true},
			{text: 'D', isCorrect: false},
		]
	}
]

let questionIndex = 0

function initializeQuestion(index)
{
	question.textContent = questions[index].question

	questions[index].choices.forEach((choice, i) => {

		const choice_container = document.createElement('div');
		const choice_text = document.createElement('p');
		choice_text.textContent = choice.text
		choice_container.appendChild(choice_text)
		choice_container.classList.add('choice');
		choices.appendChild(choice_container)

	})


}

initializeQuestion(questionIndex)

