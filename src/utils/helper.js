var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export function GenerateName() {
    var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName
};

export function GenerateMessage(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}


// {
//     "kind": "youtube#channelListResponse",
//     "etag": "52WgzXSfbHDidnVk0mreDSWI9hA",
//     "pageInfo": {
//       "totalResults": 1,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#channel",
//         "etag": "OoISpPWEXQ6daKji32gApw-OJjY",
//         "id": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
//         "snippet": {
//           "title": "Google for Developers",
//           "description": "Subscribe to join a community of creative developers and learn the latest in Google technology — from AI and cloud, to mobile and web.\n\nExplore more at developers.google.com\n\n",
//           "customUrl": "@googledevelopers",
//           "publishedAt": "2007-08-23T00:34:43Z",
//           "thumbnails": {
//             "default": {
//               "url": "https://yt3.ggpht.com/PrZwRLLSaiXr5t-GRUhUFch2Qlol1G_voyuo-jJ4y-mqcVza7o7j_24yGRiydUP7UsQiKwo7=s88-c-k-c0x00ffffff-no-rj",
//               "width": 88,
//               "height": 88
//             },
//             "medium": {
//               "url": "https://yt3.ggpht.com/PrZwRLLSaiXr5t-GRUhUFch2Qlol1G_voyuo-jJ4y-mqcVza7o7j_24yGRiydUP7UsQiKwo7=s240-c-k-c0x00ffffff-no-rj",
//               "width": 240,
//               "height": 240
//             },
//             "high": {
//               "url": "https://yt3.ggpht.com/PrZwRLLSaiXr5t-GRUhUFch2Qlol1G_voyuo-jJ4y-mqcVza7o7j_24yGRiydUP7UsQiKwo7=s800-c-k-c0x00ffffff-no-rj",
//               "width": 800,
//               "height": 800
//             }
//           },
//           "localized": {
//             "title": "Google for Developers",
//             "description": "Subscribe to join a community of creative developers and learn the latest in Google technology — from AI and cloud, to mobile and web.\n\nExplore more at developers.google.com\n\n"
//           },
//           "country": "US"
//         },
//         "contentDetails": {
//           "relatedPlaylists": {
//             "likes": "",
//             "uploads": "UU_x5XG1OV2P6uZZ5FSM9Ttw"
//           }
//         },
//         "statistics": {
//           "viewCount": "292695869",
//           "subscriberCount": "2380000",
//           "hiddenSubscriberCount": false,
//           "videoCount": "6221"
//         }
//       }
//     ]
//   }
  