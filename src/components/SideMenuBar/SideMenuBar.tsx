import testimg from './testuserimg.png';

const SideMenuBar = () => {
	return (
		<div>
			{/* header */}
			<header>
				<img src={testimg} alt="" />
				<button>{'<<'}</button>
			</header>
			{/* button area */}
			<div>
				<div>
					<img src="" alt="" />
					<p>새로운 회의 생성하기</p>
				</div>
				<div>
					<img src="" alt="" />
					<p>새로운 회의 생성하기</p>
				</div>
			</div>
			{/* 회의 기록 */}
			<div>
				<h3>회의 기록</h3>
				<div>
					<img src="" alt="" />
					<p>회의 제목</p>
				</div>
				<div>
					<img src="" alt="" />
					<p>회의 제목</p>
				</div>
				<div>
					<img src="" alt="" />
					<p>회의 제목</p>
				</div>
			</div>
			{/* 진행중인 회의 */}
			<div>
				<h3>진행중인 회의</h3>
				<div>
					<img src="" alt="" />
					<p>회의 제목</p>
				</div>
				<div>
					<img src="" alt="" />
					<p>회의 제목</p>
				</div>
				<div>
					<img src="" alt="" />
					<p>회의 제목</p>
				</div>
			</div>
		</div>
	);
};

export default SideMenuBar;
