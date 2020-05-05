import FavoritesUrl from'./Favorites.txt'
export async function getFavorites(){
     const res=await fetch(FavoritesUrl);
     if(!res.ok){
          throw new Error(`${res.status} `)
     }
     try {
          const json=await res.json();
          return json as string[];
     } catch (error) {
          throw new Error(error)


     }

}
