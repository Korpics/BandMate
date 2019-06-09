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

    const tryharder = await User.create ({
        "username": 'LBJ',
        "password": 'LBJpassword',
        "name":'Lebron James',
        "instrument": 'guitar',
        "age": '29',
        "genre": 'alternative',
        "borrough": 'brooklyn',
        "link": 'www.facebook.com',
        "influences": "The Cure",
        "bio": "nice stuff there yeah"
    })


    const Post_01 =  await Post.create({
      
      username: 'test',
      title: 'The irrevocable and jujune fall of contemporary politics',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu suscipit mi. Quisque in iaculis neque, nec ultricies ante. Curabitur eget mauris lacus. Mauris nec mi hendrerit, pharetra quam nec, porttitor lorem. Donec at facilisis dolor. Maecenas a tincidunt sem. Vestibulum aliquam felis eget porta porttitor. Nulla facilisi. Ut in pulvinar ante. Etiam ac neque ac purus ornare volutpat blandit non mauris. Donec in ultrices ipsum, ut placerat nisl. Donec ac molestie felis, id imperdiet nisl. Integer efficitur ornare sodales. Sed sit amet eleifend massa. Vivamus cursus pellentesque mi, nec pulvinar quam commodo eu. Maecenas sagittis at urna et luctus. Donec sit amet sapien eros. Proin fringilla id magna at convallis. Ut hendrerit elit sit amet ipsum commodo iaculis. Sed feugiat augue ac sapien vestibulum euismod. Nulla id mattis tortor. Morbi ac neque sed sapien gravida auctor ut eget nisi. Nulla sed tincidunt urna, at lacinia nulla. Sed non ultrices elit. Nullam luctus nibh non neque placerat consectetur dictum eu elit. Mauris venenatis tincidunt congue. Donec ut dapibus augue, convallis lacinia nunc. Sed vestibulum commodo ligula, sed varius sapien vehicula quis. Nulla facilisi. Nullam orci lectus, posuere ac urna non, malesuada feugiat neque. Nunc quis maximus urna. Integer nunc arcu, venenatis at placerat et, imperdiet quis odio. Cras et finibus risus, id laoreet tellus. Praesent id egestas ante. Mauris semper auctor dui vehicula facilisis. Maecenas dapibus purus sed tellus auctor, ac volutpat magna pharetra. Vestibulum commodo quis diam vitae consequat.'

   });
   const Post_02 =  await Post.create({
    
    username: 'test',
    title: 'The unused philosophy of philosophizing',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu suscipit mi. Quisque in iaculis neque, nec ultricies ante. Curabitur eget mauris lacus. Mauris nec mi hendrerit, pharetra quam nec, porttitor lorem. Donec at facilisis dolor. Maecenas a tincidunt sem. Vestibulum aliquam felis eget porta porttitor. Nulla facilisi. Ut in pulvinar ante. Etiam ac neque ac purus ornare volutpat blandit non mauris. Donec in ultrices ipsum, ut placerat nisl. Donec ac molestie felis, id imperdiet nisl. Integer efficitur ornare sodales. Sed sit amet eleifend massa. Vivamus cursus pellentesque mi, nec pulvinar quam commodo eu. Maecenas sagittis at urna et luctus. Donec sit amet sapien eros. Proin fringilla id magna at convallis. Ut hendrerit elit sit amet ipsum commodo iaculis. Sed feugiat augue ac sapien vestibulum euismod. Nulla id mattis tortor. Morbi ac neque sed sapien gravida auctor ut eget nisi. Nulla sed tincidunt urna, at lacinia nulla. Sed non ultrices elit. Nullam luctus nibh non neque placerat consectetur dictum eu elit. Mauris venenatis tincidunt congue. Donec ut dapibus augue, convallis lacinia nunc. Sed vestibulum commodo ligula, sed varius sapien vehicula quis. Nulla facilisi. Nullam orci lectus, posuere ac urna non, malesuada feugiat neque. Nunc quis maximus urna. Integer nunc arcu, venenatis at placerat et, imperdiet quis odio. Cras et finibus risus, id laoreet tellus. Praesent id egestas ante. Mauris semper auctor dui vehicula facilisis. Maecenas dapibus purus sed tellus auctor, ac volutpat magna pharetra. Vestibulum commodo quis diam vitae consequat.'

   });
   const Post_03 =  await Post.create({
    
    username: 'test',
    title: `Thanos: just a guy who's trying to make the world a better place`,  
    body: `Listen, I mean... it isn't all too bad, right? Guys? There's more resources to go around... for everyone... and less mouths to feed... I feel like you guys pulled back before you even started reading this.`

   });
   const Post_04 =  await Post.create({
    
    username: 'test',
    title: `Oh My G.O.D.D.: Granite, Opium, and Dungeons & Dragons, and why you're children need to stay away from them`,   
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu suscipit mi. Quisque in iaculis neque, nec ultricies ante. Curabitur eget mauris lacus. Mauris nec mi hendrerit, pharetra quam nec, porttitor lorem. Donec at facilisis dolor. Maecenas a tincidunt sem. Vestibulum aliquam felis eget porta porttitor. Nulla facilisi. Ut in pulvinar ante. Etiam ac neque ac purus ornare volutpat blandit non mauris. Donec in ultrices ipsum, ut placerat nisl. Donec ac molestie felis, id imperdiet nisl. Integer efficitur ornare sodales. Sed sit amet eleifend massa. Vivamus cursus pellentesque mi, nec pulvinar quam commodo eu. Maecenas sagittis at urna et luctus. Donec sit amet sapien eros. Proin fringilla id magna at convallis. Ut hendrerit elit sit amet ipsum commodo iaculis. Sed feugiat augue ac sapien vestibulum euismod. Nulla id mattis tortor. Morbi ac neque sed sapien gravida auctor ut eget nisi. Nulla sed tincidunt urna, at lacinia nulla. Sed non ultrices elit. Nullam luctus nibh non neque placerat consectetur dictum eu elit. Mauris venenatis tincidunt congue. Donec ut dapibus augue, convallis lacinia nunc. Sed vestibulum commodo ligula, sed varius sapien vehicula quis. Nulla facilisi. Nullam orci lectus, posuere ac urna non, malesuada feugiat neque. Nunc quis maximus urna. Integer nunc arcu, venenatis at placerat et, imperdiet quis odio. Cras et finibus risus, id laoreet tellus. Praesent id egestas ante. Mauris semper auctor dui vehicula facilisis. Maecenas dapibus purus sed tellus auctor, ac volutpat magna pharetra. Vestibulum commodo quis diam vitae consequat.'

   });
   const Post_05 =  await Post.create({
    
    username: 'test',
    title: `Mr. White is an awful chemist: Change my mind`,
    body: `Oh well, heil Hitler, bitch! And let me tell you something else. So what're you saying? Like, I shot someone with, like, a gun? We flipped a coin, okay? You and me. You and me! Coin flip is sacred! Your job is waiting for you in that basement, as per the coin! 
     I took this vo-tech class in high school, woodworking. I took a lot of vo-tech classes, because it was just big jerk-off, but this one time I had this teacher by the name of... Mr... Mr. Pike. I guess he was like a Marine or something before he got old. He was hard hearing. My project for his class was to make this wooden box. You know, like a small, just like a... like a box, you know, to put stuff in. So I wanted to get the thing done as fast as possible. 
     I figured I could cut classes for the rest of the semester and he couldn't flunk me as long as I, you know, made the thing. So I finished it in a couple days. And it looked pretty lame, but it worked. You know, for putting in or whatnot. So when I showed it to Mr. Pike for my grade, he looked at it and said: 'Is that the best you can do?' 
     At first I thought to myself 'Hell yeah, bitch. Now give me a D and shut up so I can go blaze one with my boys.' I don't know. Maybe it was the way he said it, but... it was like he wasn't exactly saying it sucked. He was just asking me honestly, 'Is that all you got?' And for some reason, I thought to myself: 'Yeah, man, I can do better.' `

   });
   const Post_06 =  await Post.create({
    
    username: 'test',
    title: `I am ASAC Shrader`,
    body: `I looked him up it was one of these physicists, one of Hitler's guys, physicist named Werner Heisenberg - real cute huh? Anyway, I figure with a handle like that my guy's gotta be some sort of a, some sort of an of egg head. No offense. And here we go, Gale 'Major Tom' Boetticher. Anyway, I just wanna see if I'm you know, not barking up the wrong tree chemically speaking. Uh, as far as I can make out, he's writing about a phenylacetone cook, right? That's pretty rare these days, but it does jive with the blue stuff I've been tracking. 
     That's a recipe for vegan s'mores. There's all kinds of crazy crap in there. He had like a top ten recumbent bicycles, indoor composting tips, all right next to the mother of methamphetamine syntheses. This guy was a uh, man he was a real character. Let me show you something. Right here, the top it says uh... 'to W.W. my star, my perfect silence.' W.W. who do you figure that is, you know? Woodrow Wilson, Willy Wonka... Walter White?    
     Sorry, buddy. No can do. Pain is my foot in your ass. Ooh, heyo... pool party! Hey, I don't get the gag, jackoff. Who is this? So... let me get this straight. You got this meth from 'some dude' wearing khaki pants, who - you're 80% sure - had a mustache. And that's it? That's your brain working at full capacity? It means I think your story's bullshit. 
     Marie, I said Cheetos, not Fritos. I must've said Cheetos like ten times. You need me to write it down for you? Well, I'm just saying, y'know, I said Cheetos. Ch-ch-ch sound. Virtually impossible to confuse Cheetos with Fritos it seems to me. Where are you going?`

   });
  

   await tryhard.setFriends(tryharder)
   await tryharder.setFriends(tryhard)
   await Post_01.setUser(tryhard)
   await Post_02.setUser(tryharder)
   await Post_03.setUser(tryharder)
   await Post_04.setUser(tryhard)
   await Post_05.setUser(tryhard)
   await Post_06.setUser(tryharder)
    // const creator = await User.bulkCreate(users)
  } catch (e) { 
      console.log('models issue ****' + e);
  } finally {
    await process.exit();
  }
}



seedDb();