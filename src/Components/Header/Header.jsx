import profileImg from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center py-5  border-b-2 mb-5'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profileImg} alt="" />

        </div>
    );
};

export default Header;