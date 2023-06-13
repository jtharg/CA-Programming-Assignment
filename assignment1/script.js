
//Assignment 1: 
const animal = {
    "Lion": "The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.",
    "Tiger": "The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar.",
    "Elephant": "Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea.",
    "Cheetah": "The cheetah is a large cat native to Africa and Southwest Asia. It is the fastest land animal, capable of running at 80 to 98 km/h, as such has evolved specialized adaptations for speed, including a light build, long thin legs and a long tail.",
    "Monkey": "Monkey is a common name that may refer to most mammals of the infraorder Simiiformes, also known as the simians",
    "Bird": "Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton",
    "Giraffe": "The giraffe is a large African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Traditionally, giraffes were thought to be one species, Giraffa camelopardalis, with nine subspecies.",
    "Fish": "Fish are aquatic, craniate, gill-bearing animals that lack limbs with digits. Included in this definition are the living hagfish, lampreys, and cartilaginous and bony fish as well as various extinct related groups. Approximately 95% of living fish species are ray-finned fish, belonging to the class Actinopterygii, with around 99% of those being teleosts.",
    "Cat": "The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family.",
    "Dog": "The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct Pleistocene wolves, and the modern wolf is the dog's nearest living relative. Dogs were the first species to be domesticated by hunter-gatherers over 15,000 years ago before the development of agriculture."
}

const ddlAnimal = document.getElementById('ddlAnimal');
const divAnimalInfo = document.getElementById('animal-info');
const originalDescription = "Select an animal from the dropdown to see more information.";
ddlAnimal.addEventListener('change', function(){
    const selectedAnimal = ddlAnimal.value;
    if(selectedAnimal === ''){
        divAnimalInfo.textContent = originalDescription;
    }
    else{
        const animal_description = animal[selectedAnimal];
        divAnimalInfo.innerHTML = `<strong>${selectedAnimal}</strong>: ${animal_description}`;
    }
});

