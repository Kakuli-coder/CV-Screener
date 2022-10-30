console.log(`This is JS of CV Screener Project`);

// Data is an array of objects that contain information about the candidates
// (used randomuser.me API for images)

const data = [
    {
        name: 'Rohani',
        age: 18,
        city: 'Delhi',
        language: 'JavaScript',
        image: 'https://randomuser.me/api/portraits/med/women/79.jpg'
    },
    {
        name: 'AK',
        age: 20,
        city: 'Dhanbad',
        language: 'C++',
        image: 'https://randomuser.me/api/portraits/med/men/34.jpg'
    },
    {
        name: 'Shubham',
        age: 26,
        city: 'Mumbai',
        language: 'Python',
        image: 'https://randomuser.me/api/portraits/med/men/79.jpg'
    },
    {
        name: 'Shruti',
        age: 24,
        city: 'Bangalore',
        language: 'C',
        image: 'https://randomuser.me/api/portraits/med/women/69.jpg'
    },
    {
        name: 'Puja',
        age: 25,
        city: 'Kolkata',
        language: 'Flutter',
        image: 'https://randomuser.me/api/portraits/med/women/12.jpg'
    },
    {
        name: 'Kakuli',
        age: 20,
        city: 'Hazaribag',
        language: 'React JS',
        image: 'https://randomuser.me/api/portraits/med/women/60.jpg'
    },
    {
        name: 'Shams',
        age: 27,
        city: 'Hyderabad',
        language: 'C#',
        image: 'https://randomuser.me/api/portraits/med/men/10.jpg'
    },
    {
        name: 'Harry Potter',
        age: 30,
        city: 'California',
        language: 'Java',
        image: 'https://randomuser.me/api/portraits/med/men/99.jpg'
    },
    {
        name: 'Devi',
        age: 18,
        city: 'Thiruvananthapuram',
        language: 'R',
        image: 'https://randomuser.me/api/portraits/med/women/50.jpg'
    },
    {
        name: 'Amit',
        age: 19,
        city: 'Bokaro',
        language: 'SQL',
        image: 'https://randomuser.me/api/portraits/med/men/97.jpg'
    }
];

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
};
const candidates = cvIterator(data);
nextCV();

let nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.querySelector("#image");
    let table = document.querySelector("#table");
    if (currentCandidate !== undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}" alt="${currentCandidate.name}-img">`;
        table.innerHTML = `
        <tbody>
            <tr>
                <th scope="row" class="col-lg-5" id="col">Name</th>
                <td class="col-lg-9">${currentCandidate.name}</td>
            </tr>
            <tr>
                <th scope="row" id="col">Age</th>
                <td>${currentCandidate.age}</td>
            </tr>
            <tr>
                <th scope="row">City</th>
                <td colspan="2">${currentCandidate.city}</td>
            </tr>
            <tr>
                <th scope="row">Language</th>
                <td colspan="2" class="text-wrap">${currentCandidate.language}</td>
            </tr>
        </tbody>
        ` ;
    } else {
        let alert = document.querySelector("#alert");
        alert.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>End of Applications!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="window.location.reload()"></button>
        </div>
        `
        setTimeout(() => {
            alert.innerHTML = ``;
            window.location.reload();
        }, 1000);
    }

};
