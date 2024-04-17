import Button1 from "./Button1";
import Button2 from "./Button2";

const Ui1 = () => {
  return (
    <div>
      <h2>story book</h2>
      <div>
        <Button1
          color={"#DD5746"}
          isDisable={false}
          onClick={() => {
            window.open(
              "//localhost:6006/?path=/docs/%EC%98%88%EC%A0%9C-%ED%8F%B4%EB%8D%941-%EB%B2%84%ED%8A%BC-%ED%98%95%ED%83%9C-1--docs",
            );
          }}
        >
          버튼 1
        </Button1>
      </div>
      <div>--</div>
      <div>
        <Button2
          color={"#4793AF"}
          isDisable={false}
          onClick={() => {
            window.open(
              "//localhost:6006/?path=/docs/%EC%98%88%EC%A0%9C-%ED%8F%B4%EB%8D%942-%EB%B2%84%ED%8A%BC-%ED%98%95%ED%83%9C-2--docs",
            );
          }}
        >
          버튼 2
        </Button2>
      </div>
      <div>
        <p>$ pnpm run storybook $ npm run storybook</p>
        <a href="//localhost:6006" target="_blank">
          <Button1 color={"#FFC470"}>open</Button1>
        </a>
      </div>
    </div>
  );
};

export default Ui1;
