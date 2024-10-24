import Button from "../common/Button";
import ChatGroup from "./ChatGroup";
import { useTravelStore } from "../../stores/useTravelStore";
import { useChatStore } from "../../stores/useChatStore";
import { useNavigate } from "react-router";
import { PREFERENCE_DESCRIPTIONS_MAP, STYLE_CATEGORIES } from "../../constants";
import usePostTravelInfo from "../../hooks/usePostTravelInfo";
import styled from "styled-components";

const Preferences = () => {
  const navigate = useNavigate();

  const likeTracking = useTravelStore((store) => store.likeTracking);
  const preferences = useTravelStore((store) => store.preferences);
  const setPreferences = useTravelStore((store) => store.setPreferences);

  const step = useChatStore((state) => state.step);
  const next = useChatStore((state) => state.next);

  const { mutate } = usePostTravelInfo();

  const resetStyle = () => {
    if (step !== 4) return;

    localStorage.removeItem("preferences");
    setPreferences([0, 0, 0, 0]);
    navigate("/style");
  };

  const createTravel = () => {
    if (step !== 4) return;

    localStorage.setItem("activeMessageId", "course");
    next();
    mutate();
  };

  const goStylePage = () => {
    if (step !== 4) return;

    navigate("/style");
  };

  const getStyleDescriptions = () => {
    const tracking =
      likeTracking === "Y" ? ", 트래킹 선호" : ", 트래킹 선호하지 않음";
    return (
      preferences
        .map((preference, index) => {
          return index <= 2
            ? STYLE_CATEGORIES[index][preference - 1] +
                " " +
                PREFERENCE_DESCRIPTIONS_MAP[preference]
            : STYLE_CATEGORIES[index][preference - 1];
        })
        .join(", ") + tracking
    );
  };

  if (localStorage.getItem("preferences"))
    return (
      <Container>
        <ChatGroup
          who="chet"
          groupKey="preferences"
          texts={[
            `여행 스타일은 그대로 할거야? \n현재: ${getStyleDescriptions()}`,
          ]}
        />
        <ChatGroup who="user" groupKey="preferences2">
          <>
            <Button design="secondary" onClick={resetStyle}>
              새로 고르기
            </Button>
            <Button design="secondary" onClick={createTravel}>
              그대로
            </Button>
          </>
        </ChatGroup>
      </Container>
    );

  return (
    <Container>
      <ChatGroup
        who="chet"
        groupKey="preferences"
        texts={["그렇구나! 이번 여행의 스타일을 알려줘!"]}
      />
      <ChatGroup who="user" groupKey="preferences4">
        <Button design="secondary" onClick={goStylePage}>
          스타일 고르러 가기
        </Button>
      </ChatGroup>
    </Container>
  );
};

export default Preferences;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
