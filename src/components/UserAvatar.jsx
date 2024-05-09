import AvatarImg from "../assets/avatar_img.jpg"


const UserAvatar = () => {
  return (
    <div className="profile__avatar">
    <img src={AvatarImg} alt="profile__avatar" />
  </div>
  )
}

export default UserAvatar