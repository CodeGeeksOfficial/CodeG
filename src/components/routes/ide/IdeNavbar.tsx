import Link from "next/link";
import React from "react";
import Logo from "src/lib/assets/logo.svg";
import { useAuth } from "src/utils/auth";
import GoogleIcon from 'src/lib/assets/icons/GoogleIcon.svg'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { withAuthModal } from "src/components/common/Modals/Auth";

type IdeNavbarProps = {
  openAuthModal?: () => void
};

const settings = ['Logout'];


const IdeNavbar = ({openAuthModal}: IdeNavbarProps) => {
  const { signInWithGoogle,currentUser,logOut } = useAuth()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const hangleGoogleLogin = async () => {
    try {
      let result = await signInWithGoogle()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignOut = () => {
    logOut()
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // console.log(currentUser)
  return (
    <div className="w-screen h-[8vh] bg-[#202225] flex items-center justify-between px-4">
      <Link
        href="/"
        className="text-2xl sm:text-3xl flex font-semibold justify-center items-center lg:justify-start"
      >
        <Logo className="w-8 h-8 mr-2" />
        <span className="text-white">Code</span>
        <span className="text-[#00ffc2]">G</span>
      </Link>

      {currentUser ? 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={currentUser?.displayName}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={currentUser?.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem sx={{width:80,height:20}} key={setting} onClick={handleSignOut}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        :
        <button 
          className="flex flex-row gap-2 items-center cursor-pointer px-2 py-2 hover:bg-[#00ffc3] hover:border-[#00ffc3] border rounded-md ease-in duration-100 text-white tracking-wide hover:text-[#303136]"
          onClick={openAuthModal}
        >
          <GoogleIcon className = 'w-6 h-6'/>
          <div className="text-sm sm:text-base">Sign In</div>
        </button>
      }
    </div>
  );
};

// export default IdeNavbar
export default withAuthModal(IdeNavbar)