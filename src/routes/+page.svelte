<script lang="ts">
import Line from "../components/Line.svelte";
import { blur } from 'svelte/transition';
import { onMount } from "svelte";
import LineContainer from "../components/LineContainer.svelte";
import GradientBackground from "../components/GradientBackground.svelte";
import Icon from "../icons/Icon.svelte"
import SkillComponent from "../components/SkillComponent.svelte";
import StackIcon from "../icons/StackIcon.svelte";
import KirsiBlogLogo from "../components/KirsiBlogLogo.svelte";
let visual = false;
let backgroundVisual = false;

let itemVisible = [false,false,false];
let ids = ["title1","title2","title3"]

let observer :IntersectionObserver;

onMount(()=>{
	console.log("%cWELCOME MY PORTFOLIO !", "font-size: 32px; font-weight:900; background: linear-gradient(to right, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%); -webkit-background-clip: text; color: transparent;");

	visual = true;
	setTimeout(()=>{backgroundVisual = true},1000);
	observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if(entry.target.getAttribute('id') === "title1"){
				if(entry.intersectionRatio > 0.8) {
					itemVisible[0] = entry.isIntersecting;
				}else{
					itemVisible[0] = false;
				}
			} else if(entry.target.getAttribute('id') === "title2" ){
				if(entry.intersectionRatio > 0.8) {
					itemVisible[1] = entry.isIntersecting;
				}else{
					itemVisible[1] = false;
				}
			} else if(entry.target.getAttribute('id') === "title3"){
				itemVisible[2] = entry.isIntersecting;
			}
		});
	}, {
		root: null,
		rootMargin: '0px',
		threshold: [0.2,0.8]
	});

	ids.forEach(item => {
		const element = document.querySelector(`#${item}`);
		if (element) {
			observer.observe(element);
		}
	});

	return () => {
		observer.disconnect();
	};
})
</script>

<svelte:head>
	<title>Goh Jae Hyun</title>
	<meta name="description" content="portfolio web site" />
</svelte:head>

<section class="firstSection">
	{#if visual}
		<div class="sectionBlock">
			<LineContainer>
				<Line hrColor="#999999" hrWidth={14} hrHeight={14} hrWidthType="px" durationTime={1000} />
				<Line hrColor="background-color: #FFE53B;background-image: linear-gradient(270deg, rgb(201 190 120) 0%, rgb(235 117 117) 74%);" hrWidth={150} hrHeight={14} durationTime={1250} />
				<Line hrColor="#999999" hrWidth={14} hrHeight={14} hrWidthType="px" durationTime={1500} />
			</LineContainer>
			<LineContainer>
				<Line hrColor="background-color: #21D4FD;background-image: linear-gradient(270deg, rgb(99 182 201) 0%, rgb(147 47 195) 100%);" hrWidth={100} hrHeight={14} durationTime={1100} />
				<Line hrColor="#999999" hrWidth={14} hrHeight={14} hrWidthType="px" durationTime={1300} />
				<Line hrColor="background-color: #FFE53B;background-image: linear-gradient(270deg, rgb(201 190 120) 0%, rgb(235 117 117) 74%);" hrWidth={50} hrHeight={14} durationTime={1500} />
				<Line hrColor="#999999" hrWidth={14} hrHeight={14} hrWidthType="px" durationTime={2000} />
			</LineContainer>
			<LineContainer tab={4}>
					<Line hrColor="#999999" hrWidth={220} hrHeight={14} durationTime={900} />
			</LineContainer>
			<LineContainer tab={4}>
				<Line hrColor="background-color: #FFE53B;background-image: linear-gradient(270deg, rgb(201 190 120) 0%, rgb(235 117 117) 74%);" hrWidth={240} hrHeight={14} durationTime={1060} />
				<Line hrColor="#999999" hrWidth={14} hrWidthType="px" hrHeight={14} durationTime={1500} />
				<Line hrColor="background-color: #F4D03F;background-image: linear-gradient(270deg, rgb(201 184 115) 0%, rgb(77 153 138) 100%);" hrWidth={120} hrHeight={14} durationTime={2000} />
				<Line hrColor="#999999" hrWidth={14} hrWidthType="px" hrHeight={14} durationTime={2500} />
			</LineContainer>
			<LineContainer tab={4} />
			<LineContainer tab={8}>
				<Line hrColor="background-color: #21D4FD;background-image: linear-gradient(270deg, rgb(99 182 201) 0%, rgb(147 47 195) 100%);" hrWidth={50} hrHeight={14} durationTime={1000} />
				<Line hrColor="#999999" hrWidth={14} hrWidthType="px" hrHeight={14} durationTime={1500} />
				<Line hrColor="background-color: #FFE53B;background-image: linear-gradient(270deg, rgb(201 190 120) 0%, rgb(235 117 117) 74%);" hrWidth={50} hrHeight={14} durationTime={2000} />
				<Line hrColor="#999999" hrWidth={14} hrWidthType="px" hrHeight={14} durationTime={2500} />
			</LineContainer>
			<LineContainer tab={8}>
				<p transition:blur={{delay:1700,duration:1000}} class="titleTypo">안녕하세요,</p>
			</LineContainer>
			<LineContainer tab={8}>
				<p transition:blur={{delay:1900,duration:1000}} class="titleTypo">FRONTEND</p>
				<p transition:blur={{delay:2100,duration:1000}} class="titleTypo">개발자</p>
				<p transition:blur={{delay:2300,duration:1000}} class="titleTypo">고재현입니다.</p>
			</LineContainer>
			<LineContainer tab={4}>
			</LineContainer>
			<LineContainer tab={4}>
				<Line hrColor="#999999" hrWidth={14} hrWidthType="px" hrHeight={14} durationTime={1000} />
				<Line hrColor="background-color: #FFE53B;background-image: linear-gradient(270deg, rgb(201 190 120) 0%, rgb(235 117 117) 74%);" hrWidth={140} hrHeight={14} durationTime={1400} />
			</LineContainer>
			<LineContainer>
				<Line hrColor="background-color: #21D4FD;background-image: linear-gradient(270deg, rgb(99 182 201) 0%, rgb(147 47 195) 100%);" hrWidth={100} hrHeight={14} durationTime={1600} />
				<Line hrColor="background-color: #F4D03F;background-image: linear-gradient(270deg, rgb(201 184 115) 0%, rgb(77 153 138) 100%);" hrWidth={140} hrHeight={14} durationTime={1800} />
			</LineContainer>
			<LineContainer>
				<Line hrColor="#999999" hrWidth={14} hrWidthType="px" hrHeight={14} durationTime={1000} />
				<Line hrColor="background-color: #F4D03F;background-image: linear-gradient(270deg, rgb(201 184 115) 0%, rgb(77 153 138) 100%);" hrWidth={100} hrHeight={14} durationTime={1200} />
				<Line hrColor="#999999" hrWidth={14} hrWidthType="px" hrHeight={14} durationTime={1400} />
				<Line hrColor="background-color: #FFE53B;background-image: linear-gradient(270deg, rgb(201 190 120) 0%, rgb(235 117 117) 74%);" hrWidth={50} hrHeight={14} durationTime={1600} />
			</LineContainer>
			<LineContainer>
			</LineContainer>
			<LineContainer>
				<Line hrColor="#999999" hrWidth={220} hrHeight={14} durationTime={1200} />
				<Line hrColor="#999999" hrWidth={14} hrHeight={14} durationTime={1600} />
			</LineContainer>
			<LineContainer>
				<Line hrColor="#999999" hrWidth={140} hrHeight={14} durationTime={1400} />
				<Line hrColor="#999999" hrWidth={110} hrHeight={14} durationTime={1600} />
			</LineContainer>
		</div>
	{/if}
	{#if backgroundVisual}
		<GradientBackground />
		<div class="backgroundBlackScreen"></div>
	{/if}
	{#if visual}
		<div transition:blur="{{delay:2000,duration:2000}}" class="bouncy">
			<p>SCROLL</p>
			<Icon IconName="DownArrow" className="iconStyle" fill="white" />
		</div>
	{/if}
</section>
<section>
	<div class="container" id="title1">
		<div class="title">
			<div class="title-tile-1" class:title-tile-action={itemVisible[0]} /><h1 style="font-size: 46px">INFORMATION</h1>
		</div>
		<div class="nameTagBox">
			<div class="profileImage"></div>
			<div class="profileBox">
				<p class="name">고재현</p>
				<p class="birthday">1995. 10. 07</p>
				<p class="comment">기술뿐 아니라 사용자 경험에 더욱 집중하여 누구나 사용하기 좋은 프로덕트를 만들기 위해 노력하는 개발자입니다.</p>
			</div>
		</div>
		<div class="contactBox">
			<p>CONTACT</p>
			<div class="smallTitle">
<!--				<div class="title-small-title" />-->
				<Icon IconName="Email" className="SmallIconStyle" fill="white" />
				<p>skrksbry@naver.com</p>
			</div>
			<div class="smallTitle">
				<Icon IconName="Phone" className="SmallIconStyle" fill="white" />
				<p>010-8887-4615</p>
			</div>
		</div>
		<div class="skillBox">
			<h1 style="width: 100%;margin:0;">SKILL</h1>
			<span class="blockSubTitle">Frontend</span>
			<SkillComponent stackName="Typescript" stackIconName="Typescript" stackColor="#3178C6" />
			<SkillComponent stackName="Javascript" stackIconName="Javascript" stackColor="#F7DF1E"/>
			<SkillComponent stackName="Next.js" stackIconName="NextJs" stackColor="#000000"/>
			<SkillComponent stackName="React" stackIconName="React" stackColor="#61DAFB"/>
			<SkillComponent stackName="React-Native" stackIconName="React" stackColor="#61DAFB"/>
			<SkillComponent stackName="Electron" stackIconName="Electron" stackColor="#47848F"/>
			<SkillComponent stackName="ReactQuery" stackIconName="ReactQuery" stackColor="#FF4154"/>
			<SkillComponent stackName="Recoil" stackIconName="Recoil" stackColor="#3578E5"/>
			<SkillComponent stackName="Svelte" stackIconName="Svelte" stackColor="#FF3E00"/>
			<span class="blockSubTitle">Backend</span>
			<SkillComponent stackName="Node.js" stackIconName="NodeJs" stackColor="#339933"/>
			<SkillComponent stackName="Nest.js" stackIconName="NestJs" stackColor="#E0234E"/>
			<SkillComponent stackName="Socket.io" stackIconName="SocketIo" stackColor="#010101"/>
			<SkillComponent stackName="Mysql / RDBMS" stackIconName="MySQL" stackColor="#4479A1"/>
			<SkillComponent stackName="MongoDB" stackIconName="MongoDB" stackColor="#47A248"/>
			<SkillComponent stackName="Redis" stackIconName="Redis" stackColor="#DC382D"/>
			<SkillComponent stackName="PHP" stackIconName="Php" stackColor="#777BB4"/>
			<span class="blockSubTitle">Infra</span>
			<SkillComponent stackName="Oracle Cloud" stackIconName="Oracle" stackColor="#F80000"/>
			<SkillComponent stackName="Amazon Web Service" stackIconName="Aws" stackColor="#FF9900"/>
			<SkillComponent stackName="Docker" stackIconName="Docker" stackColor="#2496ED"/>
			<SkillComponent stackName="Jenkins" stackIconName="Jenkins" stackColor="#D24939"/>
			<SkillComponent stackName="Git / Github Action" stackIconName="Github" stackColor="#181717"/>
			<SkillComponent stackName="Vercel" stackIconName="Vercel" stackColor="#000000"/>
			<SkillComponent stackName="NginX" stackIconName="Nginx" stackColor="#009639"/>
			<SkillComponent stackName="CloudFlare" stackIconName="CloudFlare" stackColor="#F38020"/>
			<span class="blockSubTitle">UI</span>
			<SkillComponent stackName="TailwindCSS" stackIconName="TailwindCss" stackColor="#06B6D4"/>
			<SkillComponent stackName="Styled-Component" stackIconName="StyledComponent" stackColor="#DB7093"/>
			<SkillComponent stackName="Chakra UI" stackIconName="ChakraUi" stackColor="#319795"/>
			<span class="blockSubTitle">Future</span>
			<SkillComponent stackName="Dart" stackIconName="Dart" stackColor="#0175C2"/>
			<SkillComponent stackName="Flutter" stackIconName="Flutter" stackColor="#02569B"/>
			<SkillComponent stackName="Solid.js" stackIconName="SolidJs" stackColor="#2C4F7C"/>
			<SkillComponent stackName="Java Spring" stackIconName="Spring" stackColor="#6DB33F"/>
		</div>
	</div>
</section>
<section>
	<div class="container" id="title2">
		<div class="title">
			<div class="title-tile-1" class:title-tile-action={itemVisible[1]} /><h1 style="font-size: 46px">CAREER</h1>
		</div>
		<div class="careerBox">
			<p class="careerCompanyName">(주) 아이에스컴퍼니</p>
			<p class="careerCompanyDetail">소프트웨어팀 / 대리</p>
			<p class="careerCompanyDate">2021년 11월 03일 ~ 2023년 08월 01일 ( 2년 9개월 )</p>
			<p>웹 어플리케이션 및 키오스크 개발</p>
			<ul>
				<li>웹 기반 신규 키오스크 서비스 개발</li>
				<li>키오스크 / 지점 관리용 백 오피스 개발</li>
				<li>키오스크및 백오피스와 하드웨어 네트워크 통합</li>
			</ul>
			<p>서비스 백엔드 및 DB 개발업무</p>
			<ul>
				<li>Node.js 기반 백엔드 ( RESTful / TCP Socket ) 개발</li>
				<li>전체 서비스 RDBMS 설계 및 운용</li>
			</ul>
			<p>인프라 전환 및 관리</p>
			<ul>
				<li>온-프레미스 환경 (VMware ESXi)에서 클라우드 환경 ( Oracle Cloud Infrastructure ) 으로 환경 전환 책임 주도</li>
			</ul>
		</div>
		<div class="careerBox">
			<p class="careerCompanyName">(주) 씨에스에스</p>
			<p class="careerCompanyDetail">시스템개발팀 / Senior Associate</p>
			<p class="careerCompanyDate">2023년 8월 05일 ~ 2024년 05월 08일 ( 9개월 )</p>
			<p>웹 서비스 개발</p>
			<ul>
				<li>Satella 서비스 신규개발 및 유지보수 업무</li>
			</ul>
			<p>인프라 관리 및 최적화</p>
			<ul>
				<li>Jenkins를 통한 CI/CD 파이프라인 구축 및 자동화</li>
				<li>AWS 클라우드 인프라 최적화 및 이중화 구조 구현</li>
			</ul>
		</div>
	</div>
</section>
<section>
	<div class="container" id="title3">
		<div class="title">
			<div class="title-tile-1" class:title-tile-action={itemVisible[2]} /><h1 style="font-size: 46px">PROJECT</h1>
		</div>
		<div class="projectBox">
			<div class="projectImage">
				<div><img src="/portfolio.webp" alt="개인 포트폴리오 로고" /></div>
			</div>
			<div class="projectContentBox">
				<p class="projectName">포트폴리오 프로젝트</p>
				<div class="projectStack">
					<SkillComponent stackName="Svelte" stackIconName="Svelte" stackColor="#FF3E00"/>
					<SkillComponent stackName="Vercel" stackIconName="Vercel" stackColor="#000000"/>
					<SkillComponent stackName="CloudFlare" stackIconName="CloudFlare" stackColor="#F38020"/>
				</div>
				<p class="projectDesc">
					{`포트폴리오를 문서로 관리하고 있었지만 이번에는 웹에 공개해보자는 목적에서 시작했습니다.`}
					{`\n포트폴리오 서비스는 작고 가볍기 때문에 최근 관심있게 알아보던 Svelte를 적극적으로 사용하였습니다.`}
					{`\n또한 정적 페이지인 만큼 Vercel을 통해 배포하고 CloudFlare Proxy를 적용하였습니다.`}
				</p>
				<ul>
					<li>처음부터 끝까지 Svelte를 적용하여 개발하였습니다.</li>
					<li>Vercel을 통해 배포하고, CloudFlare Proxy를 사용하였습니다.</li>
				</ul>
				<p class="projectLinkTitle">더 알아보기</p>
				<div class="projectLink">
					<a href="https://github.com/skrksbry/my-svelt-portfolio" target="_blank"><div><Icon IconName="Link" className="SmallIconStyle" fill="#000000" /><StackIcon IconName={"Github"} className="stackIcon" fill={"#000"}/>Github</div></a>
					<a href="https://github.com/skrksbry/my-svelt-portfolio" target="_blank"><div><Icon IconName="Link" className="SmallIconStyle" fill="#000000" /><KirsiBlogLogo />포트폴리오 웹 사이트 제작기</div></a>
				</div>
			</div>
		</div>
		<div class="projectBox">
			<div class="projectImage">
				<div><img src="/logo-concept.webp" alt="Kirsi Blog 로고" /></div>
			</div>
			<div class="projectContentBox">
				<p class="projectName">개인 블로그 프로젝트</p>

				<div class="projectStack">
					<SkillComponent stackName="Next.js 14" stackIconName="NextJs" stackColor="#000000"/>
					<SkillComponent stackName="Docker" stackIconName="Docker" stackColor="#2496ED"/>
					<SkillComponent stackName="Oracle Cloud" stackIconName="Oracle" stackColor="#F80000"/>
					<SkillComponent stackName="Nest.js" stackIconName="NestJs" stackColor="#E0234E"/>
					<SkillComponent stackName="MariaDB" stackIconName="MySQL" stackColor="#4479A1"/>
					<SkillComponent stackName="Redis" stackIconName="Redis" stackColor="#DC382D"/>
					<SkillComponent stackName="TailwindCSS" stackIconName="TailwindCss" stackColor="#06B6D4"/>
					<SkillComponent stackName="CloudFlare" stackIconName="CloudFlare" stackColor="#F38020"/>
				</div>
				<p class="projectDesc">
					{`티스토리를 사용하던 중, 자기만의 블로그를 만들어 깔끔한 디자인을 적용하면서도 최초 로딩속도를 매우 빠르게 만들어 보고자 했습니다.`}
					{`\n후보를 찾아보던중 비교적 최근 발표된 React 18의 RSC / RCC에 흥미가 생겨 Next.js 를 통해 RSC와 RCC, SSR을 이용하여 블로그를 제작하기로 결정하였습니다.\n`}
					{`\nRSC를 적극적으로 도입해 향후 React의 방향성에 대해 알아볼 수 있었고 만족스러운 초기 로딩속도와 디자인을 제작할 수 있었습니다.`}
				</p>
				<ul>
					<li>Nest.js와 Java Spring 을 모두 사용해보는 기회가 되었습니다.</li>
					<li>Nest.js에서 ORM을 사용하여 DB를 생성하였습니다.</li>
					<li>Next 14 / React 18 버전의 RSC와 RCC그리고 SSR을 적절하게 사용하여 개발하였습니다.</li>
					<li>깔끔한 디자인과 빠른 속도를 핵심 가치로 목표하고 개발하였습니다.</li>
				</ul>
			</div>
		</div>
		<div class="projectBox">
			<div class="projectImage">
				<div><img src="/satella_logo_color.svg" alt="satella 로고" /></div>
			</div>
			<div class="projectContentBox">
				<p class="projectName">Satella</p>
				<div class="projectStack">
					<SkillComponent stackName="Next.js" stackIconName="NextJs" stackColor="#000000"/>
					<SkillComponent stackName="Docker" stackIconName="Docker" stackColor="#2496ED"/>
					<SkillComponent stackName="Jenkins" stackIconName="Jenkins" stackColor="#D24939"/>
					<SkillComponent stackName="AWS" stackIconName="Aws" stackColor="#FF9900"/>
					<SkillComponent stackName="ReactQuery" stackIconName="ReactQuery" stackColor="#FF4154"/>
					<SkillComponent stackName="Recoil" stackIconName="Recoil" stackColor="#3578E5"/>
				</div>
				<p class="projectDesc">
					{`(주)씨에스에스에서 개발한 서브컬쳐 플렛폼입니다.`}
				</p>
				<ul>
					<li>Jenkins CI/CD 도입을 주도하여 작업하였으며, AWS EC2 인스턴스 최적화 및 이중화 작업을 수행했습니다.</li>
					<li>Next.js 를 이용해 서비스의 신규 기능개발 및 기존 기능 고도화 작업을 진행했습니다.</li>
				</ul>
			</div>
		</div>
		<div class="projectBox">
			<div class="projectImage">
				<div><img src="/ritto_icon.webp" alt="RITTO 로고" /></div>
			</div>
			<div class="projectContentBox">
				<p class="projectName">RITTO 키오스크 / 백오피스 서비스</p>
				<div class="projectStack">
					<SkillComponent stackName="Next.js" stackIconName="NextJs" stackColor="#000000"/>
					<SkillComponent stackName="React" stackIconName="React" stackColor="#61DAFB"/>
					<SkillComponent stackName="Docker" stackIconName="Docker" stackColor="#2496ED"/>
					<SkillComponent stackName="Recoil" stackIconName="Recoil" stackColor="#3578E5"/>
					<SkillComponent stackName="Oracle Cloud" stackIconName="Oracle" stackColor="#F80000"/>
					<SkillComponent stackName="TailwindCSS" stackIconName="TailwindCss" stackColor="#06B6D4"/>
					<SkillComponent stackName="Electron" stackIconName="Electron" stackColor="#47848F"/>
					<SkillComponent stackName="Socket.io" stackIconName="SocketIo" stackColor="#010101"/>
				</div>
				<p class="projectDesc">
					{`(주)아이에스컴퍼니 에서 개발한 키오스크 서비스 및 백오피스입니다.`}
				</p>
				<ul>
					<li>Electron을 사용해 React / Next.js웹 앱을 어플리케이션형태로 배포하였습니다.</li>
					<li>키오스크와 백엔드 서버간 Websocket을 통해 실시간 업데이트를 구현하였습니다.</li>
					<li>UX에 관심을 가지고 고객 동향을 모니터링하여 UX 개선을 통해 불만을 크게 줄였습니다 (사용점주 포함).</li>
					<li>온-프레미스 환경에서 클라우드 서비스인 OCI ( Oracle Cloud ) 로 전환을 통해 물리적 사고 위험을 낮추고 고가용성을 확보했습니다.</li>
				</ul>
			</div>
		</div>
		<div class="projectBox">
			<div class="projectImage" style="">
				<div><img src="/ritto_icon.webp" alt="RITTO 로고" /></div>
			</div>
			<div class="projectContentBox">
				<p class="projectName">RITTO 통합 제어 서버</p>
				<div class="projectStack">
					<SkillComponent stackName="Node.js" stackIconName="NodeJs" stackColor="#339933"/>
					<SkillComponent stackName="Docker" stackIconName="Docker" stackColor="#2496ED"/>
					<SkillComponent stackName="Oracle Cloud" stackIconName="Oracle" stackColor="#F80000"/>
					<SkillComponent stackName="MariaDB" stackIconName="MySQL" stackColor="#4479A1"/>
					<SkillComponent stackName="Grpc" stackIconName="Grpc" stackColor="#000000"/>
					<SkillComponent stackName="Redis" stackIconName="Redis" stackColor="#DC382D"/>
				</div>
				<p class="projectDesc">
					{`(주)아이에스컴퍼니 에서 개발한 모든 주문 관련 서비스의 통합 백엔드 프로젝트 입니다.`}
				</p>
				<ul>
					<li>온-프레미스 환경에서 클라우드 서비스인 OCI ( Oracle Cloud ) 로 전환을 통해 물리적 사고 위험을 낮추고 고가용성을 확보했습니다.</li>
					<li>클라우드 환경으로 전환을 통해 컴퓨팅 인스턴스 뿐 아니라 DB 이중화를 진행했습니다.</li>
					<li>Node.js를 사용함으로써 가벼우면서도 Scalable한 서버 노드를 개발하였습니다.</li>
					<li>Grpc 도입을 통해 통신 오버헤드를 50% 이상 감소시키고 MCU와 직접 통신하며 발생하는 문제를 해결하였습니다.</li>
					<li>Redis 도입을 통해 발생한 주문을 캐싱하여 DB 쿼리량을 크게 감소시켜 DB 부하 및 비용을 30% 이상 감소시켰습니다.</li>
				</ul>
			</div>
		</div>
		<div class="projectBox">
			<div class="projectImage">
				<div><img src="/ddb_logo.webp" alt="댕댕베이스 로고" /></div>
			</div>
			<div class="projectContentBox">
				<p class="projectName">댕댕베이스</p>
				<div class="projectStack">
					<SkillComponent stackName="PHP" stackIconName="Php" stackColor="#777BB4"/>
					<SkillComponent stackName="Redis" stackIconName="Redis" stackColor="#DC382D"/>
					<SkillComponent stackName="MySQL" stackIconName="MySQL" stackColor="#4479A1"/>
					<SkillComponent stackName="CentOS" stackIconName="CentOs" stackColor="#262577"/>
					<SkillComponent stackName="Apache" stackIconName="Apache" stackColor="#D22128"/>
				</div>
				<p class="projectDesc">
					{`소녀전선이라는 게임의 DB 사이트입니다, 당시 정보를 찾아볼 수 있는 사이트가 없어 군 복무중 개발하였습니다.\n`}
					{`N54L 이라는 AMD 저전력 32bit 듀얼코어 프로세서에서 20000페이지 뷰라는 접속량 발생으로 인해 처음으로 Redis 도입을 진행한 프로젝트입니다.\n`}
					{`DB의 보틀넥 현상에 대해 경험해볼 수 있는 좋은 기회가 되었습니다.`}
				</p>
				<ul>
					<li>시간당 20000건의 트렌젝션 처리를 위해 Redis캐시를 도입하여 실제 요청 건수를 10% 수준으로 감소시켰습니다.</li>
					<li>N54L의 성능적 한계를 체험했습니다.</li>
				</ul>
			</div>
		</div>
	</div>
</section>


<style>
	section {
		display: flex;
		background-color: black;
		flex-wrap: wrap;
		width: 100%;
		justify-content: center;
		z-index: 4;
		padding-top: 56px;
		padding-bottom: 56px;
		overflow: hidden;
	}
	.firstSection {
		display: flex;
		width: 100%;
		height:100vh;
		align-content: center;
		justify-content: flex-start;
		padding-top: 0;
		padding-bottom: 0
	}
	.sectionBlock > p {
		font-family: 'Pretendard', serif;
		font-weight: 700;
		width: 100%;
	}
	.sectionBlock {
		display: flex;
		font-family: 'Pretendard', serif;
		font-weight: 500;
		width: 1200px;
		height: 100%;
		padding-left: 150px;
		align-content: center;
		flex-wrap: wrap;
		gap:18px;
		z-index: 4;
	}
	.container {
		display: flex;
		font-family: 'Pretendard', serif;
		width: 1200px;
		height: 100%;
		padding:0 70px 0 70px;
		flex-wrap: wrap;
		gap:18px;
		z-index: 4;
		align-content: flex-start;
		margin-top:32px;
		box-sizing: border-box;
	}

	@media (max-width: 640px) {
		.sectionBlock {
			width: 100%;
			transform: scale(0.5);
			padding-left:0;
			margin-left:-20px;
		}
		.container {
			width: 100%;
			padding:0 16px 0 16px;
		}
	}
</style>
