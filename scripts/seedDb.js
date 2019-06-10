const { User, Post, Friendship } = require('../models.js')
const users = require('../data')

const seedDb = async () => {
  try {
    const tryhard = await User.create ({
        "username": 'KD',
        "password": 'KDpassword',
        "name":'Kevin Drew',
        "instrument": 'drums',
        "age": '33',
        "genre": 'alternative',
        "borrough": 'brooklyn',
        "link": 'www.myspace.com',
        "influences": "Modest Mouse",
        "bio": "I am a sad boy and no longer want to be a sad boy oh man please match me so that we can play music together oh what fun that would be"
    })

    const user1 = await User.create ({
        "username": 'RyanPlays',
        "password": 'RPpassword',
        "name":'Ryan Smith',
        "instrument": 'bass',
        "age": '23',
        "genre": 'alternative',
        "borrough": 'queens',
        "link": 'www.facebook.com',
        "influences": "the killers",
        "bio": "My name is ryan and I am alive yes nice"
    })
    const user2 = await User.create ({
      "username": 'BigBassPlayer',
      "password": 'BBPpassword',
      "name":'Brian',
      "instrument": 'guitar',
      "age": '29',
      "genre": 'rock',
      "borrough": 'queens',
      "link": 'www.soundcloud.com',
      "influences": "The Smiths",
      "bio": "i can not write bios anymore this is annoying"
  })
  const user3 = await User.create ({
    "username": 'HankIsHere',
    "password": 'HIHpassword',
    "name":'Hank Wells',
    "instrument": 'drums',
    "age": '23',
    "genre": 'alt',
    "borrough": 'brooklyn',
    "link": 'www.soundcloud.com',
    "influences": "Dashboard Confessional",
    "bio": "lalalalala i am a bio lalalalala"
})
const user4 = await User.create ({
  "username": 'Kablam',
  "password": 'Kpassword',
  "name":'Rick Ross',
  "instrument": 'vocals',
  "age": '21',
  "genre": 'indie',
  "borrough": 'manhatten',
  "link": 'www.fsoundcloud.com',
  "influences": "Coldplay",
  "bio": "I listen to coldplay and not even the first album"
})
const user5 = await User.create ({
  "username": 'TuffKid',
  "password": 'TKpassword',
  "name":'Tiffany Smith',
  "instrument": 'guitar',
  "age": '32',
  "genre": 'Indie Rock',
  "borrough": 'manhatten',
  "link": 'www.soundcloud.com',
  "influences": "Modest Mouse",
  "bio": "I just wanna jam "
})


    const Post_01 =  await Post.create({
      
      username: 'TuffKid',
      title: 'Math Rock Band!!',
      seeking: 'Drums',
      genre: 'Math Rock',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu suscipit mi. Quisque in iaculis neque, nec ultricies ante. Curabitur eget mauris lacus. Mauris nec mi hendrerit, pharetra quam nec, porttitor lorem. Donec at facilisis dolor. Maecenas a tincidunt sem. Vestibulum aliquam felis eget porta porttitor. Nulla facilisi. Ut in pulvinar ante. Etiam ac neque ac purus ornare volutpat blandit non mauris. Donec in ultrices ipsum, ut placerat nisl. Donec ac molestie felis, id imperdiet nisl. Integer efficitur ornare sodales. Sed sit amet eleifend massa. Vivamus cursus pellentesque mi, nec pulvinar quam commodo eu. Maecenas sagittis at urna et luctus. Donec sit amet sapien eros. Proin fringilla id magna at convallis. Ut hendrerit elit sit amet ipsum commodo iaculis. Sed feugiat augue ac sapien vestibulum euismod. Nulla id mattis tortor. Morbi ac neque sed sapien gravida auctor ut eget nisi. Nulla sed tincidunt urna, at lacinia nulla. Sed non ultrices elit. Nullam luctus nibh non neque placerat consectetur dictum eu elit. Mauris venenatis tincidunt congue. Donec ut dapibus augue, convallis lacinia nunc. Sed vestibulum commodo ligula, sed varius sapien vehicula quis. Nulla facilisi. Nullam orci lectus, posuere ac urna non, malesuada feugiat neque. Nunc quis maximus urna. Integer nunc arcu, venenatis at placerat et, imperdiet quis odio. Cras et finibus risus, id laoreet tellus. Praesent id egestas ante. Mauris semper auctor dui vehicula facilisis. Maecenas dapibus purus sed tellus auctor, ac volutpat magna pharetra. Vestibulum commodo quis diam vitae consequat.'

   });
   const Post_02 =  await Post.create({
    
    username: 'KD',
    title: 'Jazz meets New Wave',
    seeking: 'Bass',
    genre: 'jazz',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu suscipit mi. Quisque in iaculis neque, nec ultricies ante. Curabitur eget mauris lacus. Mauris nec mi hendrerit, pharetra quam nec, porttitor lorem. Donec at facilisis dolor. Maecenas a tincidunt sem. Vestibulum aliquam felis eget porta porttitor. Nulla facilisi. Ut in pulvinar ante. Etiam ac neque ac purus ornare volutpat blandit non mauris. Donec in ultrices ipsum, ut placerat nisl. Donec ac molestie felis, id imperdiet nisl. Integer efficitur ornare sodales. Sed sit amet eleifend massa. Vivamus cursus pellentesque mi, nec pulvinar quam commodo eu. Maecenas sagittis at urna et luctus. Donec sit amet sapien eros. Proin fringilla id magna at convallis. Ut hendrerit elit sit amet ipsum commodo iaculis. Sed feugiat augue ac sapien vestibulum euismod. Nulla id mattis tortor. Morbi ac neque sed sapien gravida auctor ut eget nisi. Nulla sed tincidunt urna, at lacinia nulla. Sed non ultrices elit. Nullam luctus nibh non neque placerat consectetur dictum eu elit. Mauris venenatis tincidunt congue. Donec ut dapibus augue, convallis lacinia nunc. Sed vestibulum commodo ligula, sed varius sapien vehicula quis. Nulla facilisi. Nullam orci lectus, posuere ac urna non, malesuada feugiat neque. Nunc quis maximus urna. Integer nunc arcu, venenatis at placerat et, imperdiet quis odio. Cras et finibus risus, id laoreet tellus. Praesent id egestas ante. Mauris semper auctor dui vehicula facilisis. Maecenas dapibus purus sed tellus auctor, ac volutpat magna pharetra. Vestibulum commodo quis diam vitae consequat.'

   });
   const Post_03 =  await Post.create({
    
    username: 'RyanPlays',
    title: `acoustic band`,  
    seeking: 'Guitar',
    genre: 'alt',
    body: `Listen, I mean... it isn't all too bad, right? Guys? There's more resources to go around... for everyone... and less mouths to feed... I feel like you guys pulled back before you even started reading this.`

   });
   const Post_04 =  await Post.create({
    
    username: 'BigBassPlayer',
    title: `I need more cowbell`,   
    seeking: 'Farmer',
    genre: 'indie',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu suscipit mi. Quisque in iaculis neque, nec ultricies ante. Curabitur eget mauris lacus. Mauris nec mi hendrerit, pharetra quam nec, porttitor lorem. Donec at facilisis dolor. Maecenas a tincidunt sem. Vestibulum aliquam felis eget porta porttitor. Nulla facilisi. Ut in pulvinar ante. Etiam ac neque ac purus ornare volutpat blandit non mauris. Donec in ultrices ipsum, ut placerat nisl. Donec ac molestie felis, id imperdiet nisl. Integer efficitur ornare sodales. Sed sit amet eleifend massa. Vivamus cursus pellentesque mi, nec pulvinar quam commodo eu. Maecenas sagittis at urna et luctus. Donec sit amet sapien eros. Proin fringilla id magna at convallis. Ut hendrerit elit sit amet ipsum commodo iaculis. Sed feugiat augue ac sapien vestibulum euismod. Nulla id mattis tortor. Morbi ac neque sed sapien gravida auctor ut eget nisi. Nulla sed tincidunt urna, at lacinia nulla. Sed non ultrices elit. Nullam luctus nibh non neque placerat consectetur dictum eu elit. Mauris venenatis tincidunt congue. Donec ut dapibus augue, convallis lacinia nunc. Sed vestibulum commodo ligula, sed varius sapien vehicula quis. Nulla facilisi. Nullam orci lectus, posuere ac urna non, malesuada feugiat neque. Nunc quis maximus urna. Integer nunc arcu, venenatis at placerat et, imperdiet quis odio. Cras et finibus risus, id laoreet tellus. Praesent id egestas ante. Mauris semper auctor dui vehicula facilisis. Maecenas dapibus purus sed tellus auctor, ac volutpat magna pharetra. Vestibulum commodo quis diam vitae consequat.'

   });
   const Post_05 =  await Post.create({
    
    username: 'HankIsHere',
    title: `Forming band like New Order`,
    seeking: 'test',
    genre: 'indie',
    body: `I figured I could cut classes for the rest of the semester and he couldn't flunk me as long as I, you know, made the thing. So I finished it in a couple days. And it looked pretty lame, but it worked. You know, for putting in or whatnot. So when I showed it to Mr. Pike for my grade, he looked at it and said: 'Is that the best you can do?' 
     At first I thought to myself 'Hell yeah, bitch. Now give me a D and shut up so I can go blaze one with my boys.' I don't know. Maybe it was the way he said it, but... it was like he wasn't exactly saying it sucked. He was just asking me honestly, 'Is that all you got?' And for some reason, I thought to myself: 'Yeah, man, I can do better.' `

   });
   const Post_06 =  await Post.create({
    
    username: 'Kablam',
    title: `Death Cab cover Band`,
    seeking: 'Singers',
    genre: 'indie',
    body: `Anyway, I just wanna see if I'm you know, not barking up the wrong tree chemically speaking. Uh, as far as I can make out, he's writing about a phenylacetone cook, right? That's pretty rare these days, but it does jive with the blue stuff I've been tracking. 
     That's a recipe for vegan s'mores. There's all kinds of crazy crap in there. He had like a top ten recumbent bicycles, indoor composting tips, all right next to the mother of methamphetamine syntheses. This guy was a uh, man he was a real character. Let me show you something. Right here, the top it says uh... 'to W.W. my star, my perfect silence.' W.W. who do you figure that is, you know? Woodrow Wilson, Willy Wonka... Walter White?    
     Sorry, buddy. No can do. Pain is my foot in your ass. Ooh, heyo... pool party! Hey, I don't get the gag, jackoff. Who is this? So... let me get this straight. You got this meth from 'some dude' wearing khaki pants, who - you're 80% sure - had a mustache. And that's it? That's your brain working at full capacity? It means I think your story's bullshit. 
     Marie, I said Cheetos, not Fritos. I must've said Cheetos like ten times. You need me to write it down for you? Well, I'm just saying, y'know, I said Cheetos. Ch-ch-ch sound. Virtually impossible to confuse Cheetos with Fritos it seems to me. Where are you going?`

   });
  

   await tryhard.setFriends(user1)
   await user1.setFriends(tryhard)
   await user3.setFriends(tryhard)
   await tryhard.setFriends(user3)

   await Post_01.setUser(user5)
   await Post_02.setUser(tryhard)
   await Post_03.setUser(user1)
   await Post_04.setUser(user2)
   await Post_05.setUser(user3)
   await Post_06.setUser(user4)
    // const creator = await User.bulkCreate(users)
  } catch (e) { 
      console.log('models issue ****' + e);
  } finally {
    await process.exit();
  }
}



seedDb();