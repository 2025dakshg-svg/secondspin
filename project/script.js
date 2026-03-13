// --- 1. Database of Records ---
const records = [
    { id: 1, title: "पर्वत (The Mountain)", artist: "Gorillaz", price: 5500, condition: "Mint", genre: "Indie Pop, Alt-Pop", img: "https://i.discogs.com/llp-DHVYHTGS8C6_69rRKVrSab_P5SUbkDE9xAn1zfE/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NTkx/OTgyLTE3NzIyMjA2/OTMtNDg1NC5qcGVn.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 2, title: "For You", artist: "Tatsuro Yamashita", price: 3200, condition: "Near Mint", genre: "City Pop", img: "https://content.discogs.com/media/Tatsuro-Yamashita-–-For-You-300x300.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 3, title: "Debí Tirar Más Fotos", artist: "Bad Bunny", price: 31.73, condition: "Good", genre: "Salsa, Synth-pop", img: "https://i.discogs.com/yv7vkYity19S0-R2A5Nl75VI2KuJQ3fAFJYidqwEPkM/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2MzUy/NDIwLTE3NzA0MDc2/MTItODcyOS5qcGVn.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 4, title: "The Art Of Loving", artist: "Olivia Dean", price: 31.22, condition: "Mint", genre: "Indie Pop, Neo Soul", img: "https://i.discogs.com/jkcr-JFQkbkDb2y6T-a2OJunee2x1bxjv34TiN6qEDk/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1MjA3/MzY4LTE3NjA3OTk5/MzgtNjU1MC5qcGVn.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { id: 5, title: "Details", artist: "Frou Frou", price: 84.99, condition: "Near Mint", genre: "Downtempo, Synth-pop", img: "https://i.discogs.com/iJtpsV0-PvehLfNGe6ma1u6KEdYqOZb8SNKmowlHssA/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NjA4/NTc4LTE3NzIwMjYx/OTAtNTkyNy5qcGVn.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 6, title: "I Was Tired Of Being Alone", artist: "Klodya", price: 7.99, condition: "Good", genre: "House", img: "https://i.discogs.com/TVZpee_EbuOFic_UVb61_nI1VGfW2nP1lqOxuEoqe78/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyOTA5/NDMtMTQzMTUxMTkz/OS0yNDM1LmpwZWc.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
    { id: 7, title: "Modal Soul", artist: "Nujabes", price: 45.62, condition: "Mint", genre: "Jazzy Hip-Hop, Downtempo", img: "https://i.discogs.com/vrRLAdjSll2Frd-Le6iDp4Od-tCsjidW1VnwzkV59h4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNzgy/NjY4LTE3MzIxMzI2/NTQtMzU0OS5qcGVn.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { id: 8, title: "Blue Lines", artist: "Massive Attack", price: 23.09, condition: "Good", genre: "Electronic, Trip Hop", img: "https://content.discogs.com/media/Album-Cover-Massive-Attack-‎–-Blue-Lines-300x300.jpg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
    { id: 9, title: "Angine De Poitrine Vol. 1", artist: "Angine De Poitrine", price: 218.97, condition: "Near Mint", genre: "Psychedelic Rock, Math Rock", img: "https://i.discogs.com/69DGSIXLSUgoWdZb_Dgaq7jvEOn6PCQfD9l-oeor0dg/rs:fit/g:sm/q:90/h:556/w:556/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NTI0/OTAyLTE3NzEyNzMy/OTAtMzk5MC5qcGVn.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
    { id: 10, title: "Opalite", artist: "Taylor Swift", price: 38.37, condition: "Mint", genre: "Dance-pop, Synth-pop", img: "https://i.discogs.com/BbS8t4pYE8nGK1yZURzCm7aCqwkz56pNLlfp80FIm9Q/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NDkx/MTk3LTE3NzA5OTAy/OTAtMTgzOS5qcGVn.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
    { id: 11, title: "The Queen Is Dead", artist: "The Smiths", price: 20.00, condition: "Good", genre: "Jangle Pop, Post-Punk", img: "https://i.discogs.com/xd_QHLZPL8wOW1j0QVSWk1oi7DGc3a9tq4npKbakDJc/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NTk0/MDk3LTE3NzIxMzY1/ODYtMTg4NS5qcGVn.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
    { id: 12, title: "The Dark Side Of The Moon", artist: "Pink Floyd", price: 220.93, condition: "Near Mint", genre: "Prog Rock, Psychedelic", img: "https://i.discogs.com/f9HxltpumjQpZlcBXQzxXvurnEmyeJBM-nby8zXfXNo/rs:fit/g:sm/q:90/h:600/w:590/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NzMw/MTMtMTcyNzc2NDkx/OS04NTI3LmpwZWc.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
    { id: 13, title: "Who Killed Marilyn?", artist: "Glenn Danzig", price: 500.00, condition: "Poor", genre: "Punk", img: "https://i.discogs.com/1lcPVAbE9vxvnJ1p7rIX7TEZTTtbHQn4oC8Crut1LEA/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwMDE2/OTQtMTQzMTQ4NzAz/OC01NTUxLmpwZWc.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
    { id: 14, title: "Love Can't Be Modernized", artist: "The Trips", price: 2000.00, condition: "Mint", genre: "Soul", img: "https://i.discogs.com/RXKK6cSKnp5Qkl9GbyK89M8-2zvKIBgWboMjzEb_ZUI/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0ODkx/MDAtMTU1MTE2NTU0/MC01MjI1LmpwZWc.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
    { id: 15, title: "Sundowning", artist: "Sleep Token", price: 350.00, condition: "Near Mint", genre: "Progressive Metal", img: "https://content.discogs.com/media/sundowning-sub-300x300.jpg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
    { id: 16, title: "High Spirits", artist: "Joe Harriott Quintet", price: 120.00, condition: "Good", genre: "Post Bop, Jazz", img: "https://i.discogs.com/laySo5Hgh_5_-WHckF_-Cb7BHNjhbMuhMhK47pxQGMI/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyOTY1/NzctMTU5MjY1MTk0/MC05MTMxLmpwZWc.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
    { id: 17, title: "Zakarrias", artist: "Zakarrias", price: 1686.05, condition: "Near Mint", genre: "Folk Rock, Psychedelic", img: "https://i.discogs.com/WIkc2WrjRm69BWyPkACAlLRKfztEtjMEKAuln72CQuQ/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyNDE1/MTAtMTU5MzY4NDA0/OC0yMzcwLmpwZWc.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 18, title: "Bleach", artist: "Nirvana", price: 3000.00, condition: "Mint", genre: "Rock, Grunge", img: "https://content.discogs.com/media/Nirvana-–-Bleach-300x296.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 19, title: "An Apple A Day", artist: "Apple", price: 4418.60, condition: "Near Mint", genre: "Psychedelic Rock, Pop", img: "https://i.discogs.com/BjYbHtknNuWVvJ6kJnrzWacmhTW8y8LLJQAzI8x1Ehw/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzNDc3/NzQtMTY3NDUxNDEw/Ny02OTc0LmpwZWc.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { id: 20, title: "Celebration", artist: "Madonna", price: 1901.14, condition: "Good", genre: "Dance-pop, Ballad", img: "https://i.discogs.com/fAUeygUgd0_Tqp3K1YKem3G9S_yw8jlKCGbeWIz76ko/rs:fit/g:sm/q:90/h:300/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNzI0/MDItMTM4MDMwNTA4/MS01MzYzLmpwZWc.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { id: 21, title: "Be Modernized", artist: "The Trips", price: 2000.00, condition: "Mint", genre: "Soul", img: "https://i.discogs.com/RXKK6cSKnp5Qkl9GbyK89M8-2zvKIBgWboMjzEb_ZUI/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0ODkx/MDAtMTU1MTE2NTU0/MC01MjI1LmpwZWc.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 22, title: "The Queen Is Dead (Alt)", artist: "The Smiths", price: 20.00, condition: "Mint", genre: "Indie Rock", img: "https://content.discogs.com/media/the-smiths-the-queen-is-dead-album-cover-300x300.jpg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
    { id: 23, title: "पर्वत (Black Vinyl)", artist: "Gorillaz", price: 30.00, condition: "Near Mint", genre: "All-Pop", img: "https://i.discogs.com/llp-DHVYHTGS8C6_69rRKVrSab_P5SUbkDE9xAn1zfE/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NTkx/OTgyLTE3NzIyMjA2/OTMtNDg1NC5qcGVn.jpeg", preview: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" }
];

let currentIndex = 0;
const player = document.getElementById('globalPlayer');

// --- 2. Initialization ---
window.addEventListener('load', () => {
    updateCartCount();
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('query');
    if (searchQuery) {
        const searchBox = document.getElementById('shopSearch');
        if (searchBox) searchBox.value = searchQuery;
        filterRecords();
    } else if (document.getElementById('recordsGrid')) {
        displayRecords(records);
    }
});

// --- 3. Grid & Filter Logic ---
function displayRecords(data) {
    const grid = document.getElementById('recordsGrid');
    if (!grid) return;
    
    grid.innerHTML = data.map(record => `
        <div class="product">
            <img src="${record.img}" alt="${record.title}">
            <div class="info">
                <h3>${record.title}</h3>
                <p>${record.artist}</p>
                <span class="badge ${record.condition.toLowerCase().replace(/\s+/g, '-')}">${record.condition}</span>
                <p>$${record.price}</p>
                <div class="card-footer">
                    <button class="action-btn" onclick="playRecord(${record.id})">Listen</button>
                    <button class="action-btn" onclick="addToCart(${record.id})">Want</button>
                </div>
            </div>
        </div>
    `).join('');
}
// --- 4. Cart Logic ---
function addToCart(recordId) {
    const product = records.find(r => r.id === recordId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('myCart')) || [];
        cart.push(product);
        localStorage.setItem('myCart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.title} has been added to your cart for billing!`);
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('myCart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = cart.length;
}

// --- 5. Player Logic ---
function playRecord(id) {
    const record = records.find(r => r.id === id);
    if (!record) return;
    
    document.getElementById('featured-title').innerText = record.title;
    document.getElementById('featured-artist').innerText = record.artist;
    document.getElementById('featured-img').src = record.img;
    
    player.src = record.preview;
    
    // CHANGE THIS LINE: Removed the .catch alert
    player.play(); 
    
    document.getElementById('mainPlayBtn').innerText = "⏸";
    
    // Ensure the vinyl disc starts spinning
    const vinyl = document.querySelector('.vinyl-disc');
    if (vinyl) {
        vinyl.style.animationPlayState = "running";
    }
}
// --- Search Functionality ---

// Used on Home Page to redirect to Marketplace
function handleHomeSearch() {
    const query = document.getElementById('homeSearch').value;
    if (query && query.trim() !== "") {
        window.location.href = `inventory.html?query=${encodeURIComponent(query)}`;
    }
}

// Used on Marketplace to filter results in real-time
function filterRecords() {
    const searchInput = document.getElementById('shopSearch');
    if (!searchInput) return;
    
    const term = searchInput.value.toLowerCase();
    const filtered = records.filter(r => 
        r.title.toLowerCase().includes(term) || 
        r.artist.toLowerCase().includes(term)
    );
    displayRecords(filtered);
}
window.addEventListener('load', () => {
    updateCartCount();
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('query');
    
    // If we came from the home page with a search term
    if (searchQuery) {
        const searchBox = document.getElementById('shopSearch');
        if (searchBox) {
            searchBox.value = searchQuery;
            filterRecords(); // Automatically run the filter
        }
    } else if (document.getElementById('recordsGrid')) {
        displayRecords(records); // Default: show everything
    }
});

function togglePlay() {
    const playBtn = document.getElementById('mainPlayBtn');
    if (player.paused) {
        player.play();
        playBtn.innerText = "⏸";
        document.querySelector('.vinyl-disc').style.animationPlayState = "running";
    } else {
        player.pause();
        playBtn.innerText = "▶";
        document.querySelector('.vinyl-disc').style.animationPlayState = "paused";
    }
}

function nextRecord() {
    currentIndex = (currentIndex + 1) % records.length; // Loops back to start
    playRecord(records[currentIndex].id);
}

function prevRecord() {
    currentIndex = (currentIndex - 1 + records.length) % records.length; // Loops to end
    playRecord(records[currentIndex].id);
}

function filterRecords() {
    // 1. Get search term (if the bar exists)
    const searchInput = document.getElementById('shopSearch');
    const term = searchInput ? searchInput.value.toLowerCase() : "";
    
    // 2. Get dropdown value (if the filter exists)
    const conditionFilter = document.getElementById('conditionFilter');
    const condition = conditionFilter ? conditionFilter.value : "all";
    
    const filtered = records.filter(r => {
        // Check text match
        const matchesSearch = r.title.toLowerCase().includes(term) || 
                              r.artist.toLowerCase().includes(term);
        
        // Check condition match
        const matchesCondition = (condition === "all" || r.condition === condition);
        
        return matchesSearch && matchesCondition;
    });

    displayRecords(filtered);
}
 // 1. SHOP BUTTON: Directs to Marketplace
    function shopNow(id) {
        // This sends the user to the inventory page
        // It also adds the ID to the URL so you can highlight it later if you want
        window.location.href = `inventory.html?id=${id}`;
    }

    
    // 2. Update Search to work on Homepage
    function goToInventory() {
        const query = document.getElementById('homeSearch').value;
        if (query.trim() !== "") {
            window.location.href = `inventory.html?query=${encodeURIComponent(query)}`;
        } else {
            window.location.href = "inventory.html";
        }
    }

     // Logic to grab the specific record from URL
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        
       
        
        const item = records.find(r => r.id == id);

        if(item) {
            document.getElementById('det-title').innerText = item.title;
            document.getElementById('det-artist').innerText = item.artist;
            document.getElementById('det-grade').innerText = item.condition;
            document.getElementById('det-genre').innerText = item.genre;
            document.getElementById('det-price').innerText = '$' + item.price;
            document.getElementById('detail-img').innerHTML = `<img src="${item.img}" style="width:100%; border: 1px solid #ddd;">`;
        }

        