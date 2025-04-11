// const allPostApi  = () => {
//     const res = fetch (`https://openapi.programming-hero.com/api/retro-forum/posts`);
//     const data = res.json();
//     const postApi = data.data;
//     console.log(postApi);
// } 
// allPostApi();


// const allPostApi = () => {
//     fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// allPostApi()

// const allpostsApi = async () => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
//     const data = await res.json();
//     const postapi = data.data;
//     console.log(postapi);
//     return postapi;
// }
// allpostsApi();

// const allpostsApi = async (searchAllPost) => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
//     const data = await res.json();
//     const posts = data.data;
//     console.log(data);
//     showPostDisplay(posts)
// };
// allpostsApi();

// const showPostDisplay = posts => {
//     showAllPostContainer = document.getElementById('show-allpost');

//     console.log(showAllPostContainer);

//     showAllPost.forEach (post => {
//         console.log(post);

//     })
// }



const allPostApi = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts)
    displayShowPosts(posts)
};


const displayShowPosts = displayPosts => {
    const postContainer = document.getElementById('displayShowPostContainer');

    displayPosts.forEach(displayPost => {
        const isPostActive = displayPost.isActive !== undefined ? displayPost.isActive : false;
        const statusColor = isPostActive ? "bg-[#10B981]" : "bg-[#FF3434]";

        const postCardItem = document.createElement('div');
        postCardItem.classList.add("mb-4"); // optional spacing
        postCardItem.innerHTML = ` 
        <div class="bg-[#797DFC1A] border border-[#797DFC] p-9 rounded-[16px] flex items-start gap-x-6">
            <div class="relative">
                <div class="bg-white w-[72px] h-[72px] rounded-lg flex-shrink-0">
                    <img class="rounded-lg" src="${displayPost.image}" alt="">
                </div>  
                <div class="status w-[18px] h-[18px] rounded-full ${statusColor} absolute top-[-6px] right-[-6px] border-2 border-white"></div>
            </div>
            <div class="grow">  
                <h2 class="font-medium mb-2 flex gap-4 flex-wrap"> <span># ${displayPost.category}</span> <span class="text-gray-500"> Awlad Hossain</span></h2>  
                <h3 class=" text-xl font-semibold mb-2">${displayPost.title}</h3>  
                <p class="text-gray-600">${displayPost.description}</p>  
                <div class="flex items-center justify-center pt-4 mt-4 border-dashed border-[#BBBBC3] border-t-2">
                    <div class="flex gap-3 text-sm text-gray-500 w-full">  
                        <div class="flex items-center gap-2">
                            <span>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http:www.w3.org/2000/svg">
                                    <path d="M9.33333 10.5H18.6667M9.33333 15.1666H16.3333M10.5 21H7C6.07174 21 5.1815 20.6312 4.52513 19.9748C3.86875 19.3185 3.5 18.4282 3.5 17.5V8.16663C3.5 7.23837 3.86875 6.34813 4.52513 5.69175C5.1815 5.03538 6.07174 4.66663 7 4.66663H21C21.9283 4.66663 22.8185 5.03538 23.4749 5.69175C24.1313 6.34813 24.5 7.23837 24.5 8.16663V17.5C24.5 18.4282 24.1313 19.3185 23.4749 19.9748C22.8185 20.6312 21.9283 21 21 21H17.5L14 24.5L10.5 21Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span>${displayPost.comment_count}</span>
                        </div> 
                        <div class="flex items-center gap-2">
                            <span>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http:www.w3.org/2000/svg">
                                    <path d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span>${displayPost.view_count}</span>
                        </div>  
                        <div class="flex items-center gap-2">
                            <span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http:www.w3.org/2000/svg">
                                <path d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span><span>${displayPost.posted_time}</span> min</span>
                        </div>  
                    </div>
                    <button type="button" class="append-btn">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http:www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_57_425)">
                            <path d="M13.9998 0C6.26805 0 9.15527e-05 6.26814 9.15527e-05 13.9999C9.15527e-05 21.7314 6.26805 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26814 21.7315 0 13.9998 0ZM14 4.91741L22.2847 10.0835H5.71542L14 4.91741ZM22.3879 18.333H22.3871C22.3871 19.1616 21.7155 19.8331 20.887 19.8331H7.1131C6.28447 19.8331 5.61303 19.1615 5.61303 18.333V10.4122C5.61303 10.3245 5.62199 10.2393 5.63655 10.1556L13.552 15.0914C13.5617 15.0975 13.5721 15.1016 13.5821 15.1072C13.5925 15.113 13.6032 15.1186 13.6138 15.1239C13.6697 15.1527 13.7273 15.176 13.7862 15.1912C13.7923 15.1929 13.7983 15.1936 13.8044 15.195C13.869 15.2102 13.9344 15.2197 13.9998 15.2197H14.0002C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.1319 15.2105 14.1965 15.195C14.2026 15.1935 14.2086 15.1929 14.2147 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3977 15.1186 14.4084 15.113 14.4188 15.1072C14.4287 15.1016 14.4392 15.0975 14.4489 15.0914L22.3644 10.1556C22.3789 10.2393 22.3879 10.3244 22.3879 10.4122V18.333Z" fill="#10B981"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_57_425">
                            <rect width="28" height="28" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                                
                    </button>
                </div>
            </div>  
        </div>
`
        // Append to container
        postContainer.appendChild(postCardItem);

        // Find the button and attach click event with real post
        const appendButton = postCardItem.querySelector('.append-btn');
        appendButton.addEventListener('click', () => handleButtonClick(displayPost));
    });
};

let clickCount = 0;

const handleButtonClick = (post) => {
    clickCount++;

    // Avoid duplicates in the readPostContainer
    const existingTitles = [...document.querySelectorAll('#readPostContainer h5')].map(el => el.textContent);
    if (existingTitles.includes(post.title)) return;

    // Append the post to readPostContainer
    const newItem = document.createElement('div');
    newItem.className = 'bg-white rounded-2xl p-4 flex justify-between items-center mb-2';
    newItem.innerHTML = `
        <h5 class="text-base font-semibold">${post.title}</h5>
        <div class="flex items-center gap-2">
            <span>
                <!-- svg icon for view -->
            </span>
            <span>${post.view_count}</span>
        </div>
    `;

    document.getElementById('readPostContainer').appendChild(newItem);

    // Update the counter text
    const counterElement = document.getElementById('mark-read-counter');
    if (counterElement) counterElement.textContent = clickCount;

    // Show correct post in #api-content
    const apiContentContainer = document.getElementById('api-content');
    if (apiContentContainer) {
        apiContentContainer.innerHTML = `
            <h3 class="text-lg font-semibold mb-2">${post.title}</h3>
            <p class="mb-2 text-gray-700">${post.description}</p>
            <p class="text-sm text-gray-500">Views: ${post.view_count}</p>
        `;
    }
};

allPostApi();

const latestPostApi = async () => {  
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');   
    const data = await response.json();  
    const latestPosts = data || [];  
    showLatestPost(latestPosts);  
};  
  
const showLatestPost = (latestPosts) => {
    const latestContainer = document.getElementById('latestPostContainer');
    
    // latestContainer.innerHTML = ""; // Clear previous content

    latestPosts.forEach(post => {
        const { cover_image, title, description, author, profile_image, posted_date } = post;

        const latestPostCard = document.createElement("div");
        latestPostCard.innerHTML = `
            <div class="blog-item border-[#DBDCDF] border p-6 rounded-[20px]">
                <div class="mb-6">
                    <img class="bg-[#F3F3F4] rounded-[20px] h-[190px] w-full object-cover" src="${cover_image}" alt="Post Image">
                </div>
                <div class="flex gap-1 mb-2 text-sm text-gray-600">
                    <span>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#12132D" stroke-opacity="0.6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M8 7V3m8 4V3m-9 9h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <span>${author.posted_date}</span>
                </div>
                <div class="mb-4">
                    <h6 class="text-lg font-semibold mb-2">${title}</h6>
                    <p>${description}</p>
                </div>
                <div class="flex gap-4 items-center">
                    <img class="w-10 h-10 rounded-full" src="${profile_image}" alt="Avatar">
                    <div class="flex flex-col">
                        <h6 class="font-semibold">${author?.name || 'Unknown'}</h6>
                        <span class="text-sm">${author?.designation || 'Unknown'}</span>
                    </div>
                </div>
            </div>
        `;
        latestContainer.appendChild(latestPostCard);
    });
};

// Call the API
latestPostApi();
