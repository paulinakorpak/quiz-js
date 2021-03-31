export const template = (question, options) => `
    <div class="content d-flex flex-column">
        <h3 class="text-center text-primary">${question}</h3>
        <ul class="list-unstyled question-list">
            ${Object.entries(options).map((option) => `
                <li class="d-flex">
                    <div>
                        <input class="radio form-check-input" id="${option[0]}" type="radio" value="${option[0]}" name="option">
                    </div>
                    <div>
                        <label class="label form-check-label text-secondary" for="${option[0]}"">${option[1]}</label>
                    </div>
                </li>`).join('')}
        </ul>
    </div>`;
