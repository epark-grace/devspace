import React, { useState } from 'react';
import { StyledSection, TextBar } from './Main_style';
import EditIcon from '@mui/icons-material/Edit';
import ModalPost from '../common/Modal/ModalPost';
//import firebase from 'firebase/compat/app';

function Main(/*{data}*/) {
	/* const [posts, setPosts] = useState(data);
	 */
	console.log('start');
	//console.log(firebase);
	const [open, setOpen] = useState(false);
	const [modal, setModal] = useState<boolean | React.ReactNode>(false);
	console.log();
	return (
		<>
			<StyledSection>
				<TextBar>
					<EditIcon
						onClick={() => {
							setOpen(true), setModal(<ModalPost setOpen={setOpen} />);
						}}
					/>
				</TextBar>
				{open && modal}
				{/*posts.map((m,idx)=>{
    return (<><>)
  }) */}
			</StyledSection>
		</>
	);
}

export default Main;

/*export async function getServerSideProps(){
  ...

  return {props:{data}}
}*/
