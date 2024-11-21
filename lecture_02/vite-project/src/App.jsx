import './App.css'
import Avatar from './Avatar'
import Profile from './Profile'
import SemosUcilnica from './SemosUcilnica'
import User from './User'


// tatko
function App() {

const obj = { 
  name: 'Bojan', 
  age: 26, 
  img: "https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c" 
  }

  const obj1 = { 
    name: 'Bojan2', 
    age: 26, 
    img: "https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c" 
    }
  

  return (
    <>
    {/* Ovoj app component mi e tatko na Avatar */}
    {/* Shto znaci deka moze da pushtime props */}
    {/* ovie name i img se vikaat propovi ili props */}
    {/* <Avatar name='Bojan Angjeleski' img="https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c" />
    <Avatar name='Martin ' img="https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c" />
    <Avatar name='David' img="https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c" />*/}
    {/* prvo gi pushtame propovite od tatko kon dete */}
    {/* <Profile 
    ime={profileZaBojan.name} 
    godini={profileZaBojan.godini} 
    isPrivate={profileZaBojan.isPrivate}
    avatarSlika={profileZaBojan.avatar_img}  /> */}

    {/* <Profile
      traktor='TRAKTOR!'
      ime='Bojan Angjeleski'
      godini={26}
      img="https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c"
      isPrivate={false}
    /> */}
    {/* Ova mi e prvo dete  */}
    {/* vo ova prvo dete mu pustham obiekt od name i age i slika */}
    {/* <User
      profileObj={obj}
      isVerified={false}  
    />

<User
      profileObj={obj1}
      isVerified={true}  
    /> */}


      <SemosUcilnica prisuten={true}>
        {/* pushtanje na prop kako jsx */}
        <Avatar
         name='Bojan Angjeleski'
         img="https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c"
        />
      </SemosUcilnica>


      <SemosUcilnica prisuten={false}>
        <Avatar
         name='TEST '
         img="https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c"
        />
      </SemosUcilnica>


      <SemosUcilnica prisuten={true}>
        <Avatar
         name='TEST 2'
         img="https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c"
        />
        <h2>test test test</h2>
      </SemosUcilnica>

    </>
  )
}

export default App

// Vaka bi izgledalo vo javascript
// Avatar({name: "bojan", img: 'imgsrc'})


// const profileZaBojan = {
//   name: 'Bojan Angjeleski',
//   isPrivate: false,
//   age: 26,
//   avatar_img: "https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c",
// }