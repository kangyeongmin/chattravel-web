import styled from "styled-components";
import { ShareIconSVG } from "../assets";
import PageTemplate from "../components/common/PageTemplate";
import TravelCourse from "../components/travel/TravelCourse";
import useGetTravelCourse from "../hooks/useGetTravelCourse";
import useGetRegionThumbnail from "../hooks/useGetRegionThumbnail";
import useGetTrackingCourses from "../hooks/useGetTrackingCourses";
import TrackingCourse from "../components/travel/TrackingCourse";
import { useLocation } from "react-router";
import { useTravelStore } from "../stores/useTravelStore";

const Travel = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const travelId = pathname.split("=")[1];

  const likeTracking = useTravelStore((state) => state.likeTracking);

  const { data: travelCourse, status: travelCourseStatus } = useGetTravelCourse(
    Number(travelId)
  );

  const { data: regionThumbnail } = useGetRegionThumbnail();
  const { trackingCourses } = useGetTrackingCourses();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("여행을 같이 갈 친구에게 링크를 공유해보세요!");
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  if (travelCourseStatus == "pending" || !travelCourse)
    return (
      <PageTemplate pageName="Travel" badgeText="Enjoy the Travel!">
        <TravelWrapper>불러오는 중..</TravelWrapper>
      </PageTemplate>
    );

  return (
    <PageTemplate pageName="Travel" badgeText="Enjoy the Travel!">
      <TravelWrapper>
        <TravelTitle>
          <h2>{travelCourse.travelTitle}</h2>
          <Icons>
            <ShareIconSVG width={24} onClick={handleCopy} />
          </Icons>
        </TravelTitle>
        <TravelCourse courses={travelCourse.courses} />
        {trackingCourses && likeTracking === "Y" && (
          <TrackingCourse courses={trackingCourses} />
        )}
      </TravelWrapper>
      {regionThumbnail && <RegionThumbnail src={regionThumbnail} />}
    </PageTemplate>
  );
};

export default Travel;

const TravelTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    font-size: 28px;
    margin: 20px 0;
    padding-left: 10px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  & > svg {
    cursor: pointer;
  }
`;

const RegionThumbnail = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 20%;
  object-fit: cover;
`;

const TravelWrapper = styled.div`
  margin: 100px 85px;
`;
