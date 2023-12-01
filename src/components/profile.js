import styled from 'styled-components'
//import props from './profile-data.js'
import Button from './button.js' 
import Icon from './icon'



const ProfileStyled = styled.div`
    grid-area: profile;
    
    .avatar {
        border-radius: 50%;
        border: 1px solid var(--grey);
        overflow: hidden;
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }
    .name{
        font: var(--headline1);
        color: var(--white);
        margin: 0;
        margin-block-end: .5rem;
    }
    .username{
        margin-block: .5rem;
        margin-block-end: 1.5rem;
        font:var(--headline2-ligth);
    }
    .info {
        /*border: 1px solid red;*/
        color: var(--grey-2);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-block: 1rem;
        font-style: var(--body2-semi-bold);
    }
    .a {

    }
    a:hover {
        text-decoration: underline;
    }
    .buttons {
        display: flex;
        gap: .5rem;
        margin-block-end: 1.5rem;
    }
    @media screen and (max-width: 768px){
        max-inline-size: 100vw;
        .avatar{
            inline-size: 6rem;
            block-size: 6rem;
        }
        .user-info{
            display: flex;
            gap: 1rem;
            align-items: center
        }
    }
`

function Profile(props) {
    const {name, login, avatar_url, bio, followers, following, location, blog, twitter_username} = props

   
    return (
        <ProfileStyled>
                       
          <img src={avatar_url} className='avatar' width="278" height="278" alt="" />
        <p className="name">{name}</p>
        <p className="username">{login}</p>
        <div className='buttons'>
            <Button
            text="Follow" 
            link="#"
                       
            />
            <Button 
            text="Sponsor"
            icon={<Icon
                name="heart"
                size={24}
                color="var(--pink)"
                 />}
            />
        </div>
        <p className='bio info'>{bio}</p>
        <p className='followers info'>·{followers} <span>followers</span> <span>·</span> {following} <span>following</span></p>
        {/*<p className='stars info'> · 1 </p>*/}
        <p className='location info'>·{location}</p>
        <a className='info' href={blog} target='_blank' rel="noreferrer">
            {blog}
            </a>
        <a className='info' href={`https://twitter.com/${twitter_username}`} target='_blank' rel="noreferrer">
            @{twitter_username}
            </a>
        </ProfileStyled>
    )
    
}
export default Profile
