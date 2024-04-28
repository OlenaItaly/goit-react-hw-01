import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
   
    return (
  <div className={css.containerProfile}>
     <div className={css.profile}>
    <img className={css.img}
      src={image}
                    alt="User avatar"
                    
    />
    <p className={css.name}>{name}</p>
                <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.statsList}>
     <li className={css.statsItem}>
      <p>Followers</p>
         <span className={css.span}>{followers}</span>
                </li> 
     <li className={css.statsItem}>
      <p className={css.views}>Views</p>
      <span className={css.span}>{views}</span>
    </li>
    <li className={css.statsItem}>
      <p>Likes</p>
      <span className={css.span}>{likes}</span>
    </li>
  </ul>
</div>  
    )
    
}