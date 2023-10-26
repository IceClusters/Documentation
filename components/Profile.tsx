import { IconCoffee } from '@tabler/icons-react';

const Profile: React.FC<{ image: string; banner: string; name: string; gitUser: string; desc: string; tags: string[] }> = ({ image, name, gitUser, desc, banner, tags }) => {
  return (
    
      <div className="card__profile">
        <div className="content">
                <div className="banner-container">
                    <div className="banner">
                      <img className='banner--img' src={banner} />
                      <div className="profile--img">
                        <div className="img--srt">
                          <div className="container--img">
                            <a className='a--cont' href={`https://github.com/${gitUser}`}>
                              <span className='BG '>
                                <img src={image} alt={`${name}-image`} className="rounded-md bg-neutral-100 shadow-md dark:bg-neutral-900 avatar" />    
                                
                              </span>
                              <div className="txt--name--content">{name}</div>
                              
                            </a>     
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    
                </div>
                <div className="container--desc_profile">
                    <div className="tag--cont">
                    {tags.map((tag, index) => (
                      <div className="tag" key={index}>
                        {tag}
                      </div>
                    ))}
                    </div>
                    <div className="desc--content">
                      <h2 className='desc--text'>{desc}</h2>
                    </div>
                </div>
        </div>
        
      </div>
     
  
  );
};

export default Profile;
