import React, { useContext, useEffect, useState } from 'react';
import { StyledSection, TextBar } from './Main_style';
import EditIcon from '@mui/icons-material/Edit';
import { ModalPost } from '../common/Modal/ModalPost';
import { ContextUser } from '../../pages/_app';
import { ModalSignUp } from '../common/Modal/ModalSignUp';
import ModalSignUp2 from '../common/reModal/ModalSignUp2';
import ModalCompany from '../common/reModal/ModalCompany';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import styled from '@emotion/styled';

type PostArr = {
	id: number;
	profile: {
		id: number;
		name: string;
		job: string;
		company: string;
		image: null | string;
	};
	title: string;
	likeCount: number;
	commentCount: number;
	content: string;
	createdDate: string;
	hashtags: string[];
};

type DataArr =
	| {
			/*	data: {
				count : null;
				posts : object[];
				[key:string] : string; */
			data: {
				messege: string;
				data: {
					count: null;
					posts: PostArr[];
					[key: string]: string | null | object; // 추가적으로 생길 수 있는 객체에 대한 타입 처리.
				};
			};
			status: number;
			statusText: string;
			header: Object;
			request: XMLHttpRequest;
			config: Object;
	  }
	| undefined;

const Main = (/*{ data }: any*/) => {
	const [open, setOpen] = useState(false);
	const [test, setTest] = useState<boolean | React.ReactNode>(false);

	/*const [list, setList] = useState<
		[] | firebase.default.firestore.DocumentData[]
	>([]); */

	const context = useContext(ContextUser); // /ouath를 거쳐넘어온 main컴포넌트라면 ContextUser 객체 업데이트됨.

	useEffect(() => {
		if (context.user.job === '') {
			setOpen(true);
			console.log(context.user);
			setTest(<ModalSignUp2 setOpen={setOpen} setTest={setTest} />);
		}
	}, []);

	/* useEffect(() => {
		const getDate = async () => {
			try {
				const req = axios.get(
					`http://localhost:8080/api/posts?sort=recent&filter=none`
				);
				const data = await req;
				console.log(data.data);
			} catch (e) {
				console.log(e);
			}
		};
		getDate();
	}, []); */

	const { data, isLoading, isError } = useQuery(
		['posts'],
		async () =>
			axios.get(`http://localhost:8080/api/posts?sort=recent&filter=none`),
		{
			staleTime: Infinity,
			cacheTime: Infinity,
			onSuccess: (data) => {
				// 성공시 호출
				console.log(data.data.data.posts);
			},
			onError: (e) => {
				// 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
				// 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
				console.log(e);
			},
		}
	);

	const queryClient = useQueryClient();
	const arr: DataArr = queryClient.getQueryData(['posts']);
	//console.log('쿼리키', arr?.['data']?.['data']?.['posts']);
	const list = arr?.data.data.posts;

	return (
		<>
			<StyledSection>
				<TextBar>
					<button
						onClick={() => {
							setOpen(true);
							setTest(<ModalPost setOpen={setOpen} />);
						}}>
						<EditIcon />
					</button>
					<button onClick={() => setOpen(true)}>x</button>
				</TextBar>

				<Header>
					<h2>전체 카테고리</h2>
					<div className='flex_box'>
						<span> 최신</span>
						<span> 팔로잉</span>
					</div>
				</Header>
				{list
					? list.map((a) => {
							return (
								<Wrap key={a.id}>
									<div className='user_info'>
										<img src='' alt='' />
										<div className='name_time'>
											<div></div>
											<div></div>
										</div>
										<div className='job'></div>
										<div className='corp'></div>
									</div>
									<div className='hashtags'></div>
									<p className='title'></p>
									<p className='prev_text'>{a.content}</p>
									<div className='like_box'>
										<img />
										<img src='' alt='' />
										<div className='liked'></div>
										<div className='commented'></div>
									</div>
								</Wrap>
							);
					  })
					: null}

				{/* side components*/}

				{/*
				<button
					onClick={() => {
						setOpen(true);
						setModal(<ModalSignUp setOpen={setOpen} setModal={setModal} />);
					}}>
					프로필 설정 테스트
				</button>*/}

				{open && test}
			</StyledSection>
		</>
	);
};

export default Main;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	margin-top: 42px;

	> h2 {
		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 150%;
		color: #5b5b5b;
	}

	.flex_box > span {
		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 150%;
		text-align: center;
		color: #8e8e8e;
		padding: 4px;
		&.on {
			color: #808dd7;
			border-bottom: 1px solid #808dd7;
		}
	}
`;

const Wrap = styled.div`
	width: 604px;
	margin: 16px 0px;
	border: 1px solid gray;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 16px;
	background: #ffff;

	p {
		margin: 0 auto;
		width: 500px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		word-wrap: break-word;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		height: 144px;

		font-family: 'Pretendard';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
	}
`;
