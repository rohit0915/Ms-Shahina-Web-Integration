/** @format */

import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import HOC from "../HOC";
import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { Table } from "react-bootstrap";
import { MyContext } from "../Homepage/MyContext";
import { HistoricalModal } from "../Modal/GetOrder";
import Draggable from "react-draggable";
import { GetDashboardData, HistoricalDataPrevLogin } from "../Api/Api";
import { createChart, CrosshairMode, LineStyle } from "lightweight-charts";

// New Chart

// let tvScriptLoadingPromise;
const Dashboard = () => {
  const {
    myState,
    setMyState,
    secondTab,
    historicalData,
    Exchange,
    setSecondState,
    symbol,
    darkTheme,
    setExchange,
    setSymbol,
    setHistoricalData,
  } = useContext(MyContext);
  const onLoadScriptRef = useRef();
  const [modalShow, setModalShow] = useState(false);
  const cardRef = useRef(null);
  const [Total, setTotal] = useState(symbol);
  const [marketToday, setMarketToday] = useState([]);
  const [ThemeSelector, setThemeSelector] = useState("");

  useEffect(() => {
    setThemeSelector(darkTheme ? "#2c3236" : "#fff");
  }, [darkTheme]);

  // Date
  const currentDate = new Date();
  const calculatePrevDate = () => {
    const prevDate = new Date();
    prevDate.setDate(prevDate.getDate() - 365);
    return prevDate;
  };

  const prevDate = calculatePrevDate();

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const CheckingValue = useCallback(() => {
    if (Exchange === "NSE") {
      setTotal(symbol);
    } else if (Exchange === "BSE") {
      setTotal(Exchange + ":" + symbol);
    }
  }, [Exchange, symbol]);

  // useEffect(() => {
  //   onLoadScriptRef.current = createWidget;

  //   if (!tvScriptLoadingPromise) {
  //     tvScriptLoadingPromise = new Promise((resolve) => {
  //       const script = document.createElement("script");
  //       script.id = "tradingview-widget-loading-script";
  //       script.src = "https://s3.tradingview.com/tv.js";
  //       script.type = "text/javascript";
  //       script.onload = resolve;
  //       document.head.appendChild(script);
  //     });
  //   }

  //   tvScriptLoadingPromise.then(
  //     () => onLoadScriptRef.current && onLoadScriptRef.current()
  //   );

  //   return () => (onLoadScriptRef.current = null);

  //   function createWidget() {
  //     if (
  //       document.getElementById("technical-analysis-chart-demo") &&
  //       "TradingView" in window
  //     ) {
  //       new window.TradingView.widget({
  //         container_id: "technical-analysis-chart-demo",
  //         width: "100%",
  //         height: "100%",
  //         autosize: true,
  //         symbol: Total,
  //         interval: "D",
  //         timezone: "exchange",
  //         theme: darkTheme ? "dark" : "light",
  //         style: "1",
  //         toolbar_bg: "#f1f3f6",
  //         withdateranges: true,
  //         hide_side_toolbar: false,
  //         allow_symbol_change: true,
  //         save_image: false,
  //         studies: [
  //           "ROC@tv-basicstudies",
  //           "StochasticRSI@tv-basicstudies",
  //           "MASimple@tv-basicstudies",
  //         ],
  //         show_popup_button: true,
  //         popup_width: "1000",
  //         popup_height: "650",
  //         locale: "in",
  //       });
  //     }
  //   }
  // }, [Total, darkTheme]);

  useEffect(() => {
    CheckingValue();
  }, [CheckingValue]);

  // Get Dashboard Data ( Nifty 50 , Nifty Bank etc...)
  const fetchData = async () => {
    try {
      const response = await GetDashboardData();
      setMarketToday(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function DateGetter() {
    const parsedDate = new Date(prevDate);
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const updatedDate = `${year}-${month}-${day}`;
    convertDateToEpoch(updatedDate);
  }
  const convertDateToEpoch = (date) => {
    const selectedDate = new Date(date);
    selectedDate.setHours(9);
    selectedDate.setMinutes(30);
    selectedDate.setSeconds(0);
    selectedDate.setMilliseconds(0);
    const epoch = selectedDate.getTime();
    setFrom(epoch.toString());
  };

  function FormatDateTo() {
    const parsedDate = new Date(currentDate);
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const updatedDate = `${year}-${month}-${day}`;
    PrevDateConvertor(updatedDate);
  }

  const PrevDateConvertor = (dateString) => {
    const selectedDate = new Date(dateString);
    selectedDate.setHours(15);
    selectedDate.setMinutes(30);
    selectedDate.setSeconds(0);
    selectedDate.setMilliseconds(0);
    const epoch = selectedDate.getTime();
    setTo(epoch.toString());
  };

  function NewFunc() {
    if (to && from) {
      GetHistoricalDefault();
    }
  }

  useEffect(() => {
    DateGetter();
    FormatDateTo();
  }, [to, from]);

  const token = localStorage.getItem("token");

  const GetHistoricalDefault = async () => {
    const payload = {
      token,
      resolution: "D",
      exchange: Exchange,
      from,
      to,
    };
    try {
      const data = await HistoricalDataPrevLogin(payload);
      setHistoricalData(data);
    } catch (e) {
      console.log(e);
    }
  };

  // LightWeight Chart
  const chartContainerRef = useRef(null);
  let chartInstance;
  const [chartType, setChartType] = useState("candles");
  const [currentTheme, setCurrentTheme] = useState("Dark");

  useEffect(() => {
    if (historicalData?.result) {
    } else {
      NewFunc();
    }
    if (chartContainerRef.current) {
      const chartOptions = {
        layout: {
          textColor: "black",
          background: {
            type: "solid",
            color: "white",
          },
          grid: {
            vertLines: { color: "#444" },
            horzLines: { color: "#444" },
          },
          rightPriceScale: {
            scaleMargins: {
              top: 0.3,
              bottom: 0.25,
            },
            borderVisible: false,
          },
          crosshair: {
            vertLine: {
              width: 4,
              color: "rgba(224, 227, 235, 0.1)",
              style: 0,
            },
            horzLine: {
              visible: false,
              labelVisible: false,
            },
          },
          grid: {
            vertLines: {
              color: "rgba(42, 46, 57, 0)",
            },
            horzLines: {
              color: "rgba(42, 46, 57, 0)",
            },
          },
          handleScroll: {
            vertTouchDrag: false,
          },
          timeScale: {
            borderVisible: false,
          },
        },
      };

      const darkTheme = {
        chart: {
          layout: {
            background: {
              type: "solid",
              color: "#000000",
            },
            lineColor: "#fff",
            textColor: "#fff",
          },
          watermark: {
            color: "rgba(0, 0, 0, 0)",
          },
          crosshair: {
            color: "#fff",
          },
          grid: {
            vertLines: {
              color: "#000",
            },
            horzLines: {
              color: "#000",
            },
          },
        },
        series: {
          topColor: "#fff",
          bottomColor: "#5f1df1",
          lineColor: "#2d0e71",
        },
      };
      const lightTheme = {
        chart: {
          layout: {
            background: {
              type: "solid",
              color: "#FFFFFF",
            },
            lineColor: "#2B2B43",
            textColor: "#191919",
          },
          watermark: {
            color: "rgba(0, 0, 0, 0)",
          },
          grid: {
            vertLines: {
              visible: false,
            },
            horzLines: {
              color: "#f0f3fa",
            },
          },
        },
        series: {
          topColor: "rgba(33, 150, 243, 0.56)",
          bottomColor: "rgba(33, 150, 243, 0.04)",
          lineColor: "rgba(33, 150, 243, 1)",
        },
      };
      const colorfulTheme = {
        chart: {
          layout: {
            background: {
              type: "solid",
              color: "#2e1c8c",
            },
            lineColor: "#fcec60",
            textColor: "#fcec60",
          },
          watermark: {
            color: "rgba(0, 0, 0, 0)",
          },
          crosshair: {
            color: "#fcec60",
          },
          grid: {
            vertLines: {
              color: "#2e1c8c",
            },
            horzLines: {
              color: "#2e1c8c",
            },
          },
        },
        series: {
          topColor: "#fcec60",
          bottomColor: "#301e8c",
          lineColor: "#fcec60",
        },
      };

      var themesData = {
        Dark: darkTheme,
        Light: lightTheme,
        Color: colorfulTheme,
      };

      chartInstance = createChart(chartContainerRef.current, chartOptions);

      function syncToTheme(theme) {
        chartInstance.applyOptions(themesData[theme].chart);
      }

      if (chartType === "candles") {
        const candlestickSeries = chartInstance.addCandlestickSeries({
          upColor: "#26a69a",
          downColor: "#ef5350",
          borderVisible: false,
          wickUpColor: "#26a69a",
          wickDownColor: "#ef5350",
        });

        const mappedData = historicalData?.result?.map((i) => {
          return {
            open: i.open,
            high: i.high,
            low: i.low,
            close: i.close,
            time: i.time,
          };
        });

        candlestickSeries.setData(mappedData?.length > 0 ? mappedData : []);
        chartInstance.timeScale().fitContent();
      } else if (chartType === "bars") {
        const barSeries = chartInstance.addBarSeries({
          upColor: "#26a69a",
          downColor: "#ef5350",
        });

        const mappedData = historicalData?.result?.map((i) => {
          return {
            open: i.open,
            high: i.high,
            low: i.low,
            close: i.close,
            time: i.time,
          };
        });

        barSeries.setData(mappedData?.length > 0 ? mappedData : []);

        chartInstance.timeScale().fitContent();
      } else if (chartType === "area") {
        const areaSeries = chartInstance.addAreaSeries({
          lineColor: "#2962FF",
          topColor: "#2962FF",
          bottomColor: "rgba(41, 98, 255, 0.28)",
          lineWidth: 2,
          crosshairMarkerVisible: false,
          lastValueVisible: false,
          priceLineVisible: false,
        });

        const mappedData = historicalData?.result?.map((i) => {
          return {
            value: i.high,
            time: i.time,
          };
        });

        areaSeries.setData(mappedData?.length > 0 ? mappedData : []);

        var minimumPrice = mappedData[0].value;
        var maximumPrice = minimumPrice;
        for (var i = 1; i < mappedData.length; i++) {
          var price = mappedData[i].value;
          if (price > maximumPrice) {
            maximumPrice = price;
          }
          if (price < minimumPrice) {
            minimumPrice = price;
          }
        }
        var avgPrice = (maximumPrice + minimumPrice) / 2;

        var lineWidth = 2;
        var minPriceLine = {
          price: minimumPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "minimum price",
        };
        var avgPriceLine = {
          price: avgPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "average price",
        };
        var maxPriceLine = {
          price: maximumPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "maximum price",
        };

        areaSeries.createPriceLine(minPriceLine);
        areaSeries.createPriceLine(avgPriceLine);
        areaSeries.createPriceLine(maxPriceLine);

        chartInstance.timeScale().fitContent();
      } else if (chartType === "line") {
        const lineSeries = chartInstance.addLineSeries({
          color: "rgb(0, 120, 255)",
          lineWidth: 2,
          crosshairMarkerVisible: false,
          lastValueVisible: false,
          priceLineVisible: false,
        });

        const mappedData = historicalData?.result?.map((i) => {
          return {
            value: i.open,
            time: i.time,
          };
        });

        lineSeries.setData(mappedData?.length > 0 ? mappedData : []);

        var minimumPrice = mappedData[0].value;
        var maximumPrice = minimumPrice;
        for (var i = 1; i < mappedData.length; i++) {
          var price = mappedData[i].value;
          if (price > maximumPrice) {
            maximumPrice = price;
          }
          if (price < minimumPrice) {
            minimumPrice = price;
          }
        }
        var avgPrice = (maximumPrice + minimumPrice) / 2;

        var lineWidth = 2;
        var minPriceLine = {
          price: minimumPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "minimum price",
        };
        var avgPriceLine = {
          price: avgPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "average price",
        };
        var maxPriceLine = {
          price: maximumPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "maximum price",
        };

        lineSeries.createPriceLine(minPriceLine);
        lineSeries.createPriceLine(avgPriceLine);
        lineSeries.createPriceLine(maxPriceLine);

        chartInstance.timeScale().fitContent();
      }

      syncToTheme(currentTheme);
    }
    return () => {
      if (chartInstance) {
        chartInstance.remove();
      }
    };
  }, [chartType, currentTheme, historicalData, NewFunc, GetHistoricalDefault]);

  return (
    <>
      <HistoricalModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="homeS">
        {Exchange && symbol ? (
          <>
            {/* <div className="tradingview-widget-container">
            <div id="technical-analysis-chart-demo" />
            <div className="tradingview-widget-copyright"></div>
          </div> */}

            <div className="Graph">
              <div className="ChartContainer">
                <div className={darkTheme ? " darkChartType" : "chertType "}>
                  <p onClick={() => setChartType("candles")}>Candles</p>
                  <p onClick={() => setChartType("line")}>Line</p>
                  <p onClick={() => setChartType("bars")}>Bars</p>
                  <p onClick={() => setChartType("area")}>Area</p>
                </div>

                <div className={darkTheme ? " darkChartType" : "chertType "}>
                  <p onClick={() => setCurrentTheme("Dark")}>Dark</p>
                  <p onClick={() => setCurrentTheme("Light")}>Light</p>
                  <p onClick={() => setCurrentTheme("Color")}>Color</p>
                </div>
              </div>

              <div ref={chartContainerRef} id="container" />
            </div>
          </>
        ) : (
          <div className="Content_Box">
            <p className="head">Market Today</p>
            <div className="div_Box">
              {marketToday?.map((item, index) => (
                <div
                  onClick={() => {
                    localStorage.setItem(
                      "Exchange",
                      item.ExchangeData?.exchange
                    );
                    localStorage.setItem("Symbol", item.ExchangeData?.Symbol);
                    localStorage.setItem("token", item.ExchangeData?.token);
                    setExchange(item.ExchangeData?.exchange);
                    setSymbol(item.ExchangeData?.Symbol);
                  }}
                  className="Item"
                  key={index}
                >
                  <div>
                    <p className="title"> {item.name} </p>
                    <p className="price"> {item.lp} </p>
                    <p
                      className={`percent  ${item.pc < 0 ? "minus" : "plus"} `}
                    >
                      {" "}
                      ({item.pc}%){" "}
                    </p>
                  </div>
                  <i
                    className={`${
                      item.pc < 0
                        ? "fa-solid fa-arrow-trend-down"
                        : "fa-solid fa-arrow-trend-up"
                    }`}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="gridCont">
          {myState ? (
            <Draggable
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              bounds=".homeS"
            >
              <div ref={cardRef} className="handle">
                <Card className="clear ">
                  <Card.Body>
                    <i
                      className="fa-solid fa-x"
                      onClick={() => setMyState(false)}
                    ></i>

                    <div
                      className="filterDiv"
                      onClick={() => setModalShow(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <p className="clearP">
                        {" "}
                        <AiOutlineSearch
                          style={{ width: "25px", height: "25px" }}
                        />{" "}
                        Filter{" "}
                        <IoMdArrowDropdown
                          style={{ width: "25px", height: "25px" }}
                        />
                      </p>
                    </div>

                    <div className="overflow_Table">
                      <Table
                        striped
                        bordered
                        hover
                        style={{ backgroundColor: "#fff" }}
                      >
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th>Volume</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Close</th>
                            <th>Open</th>
                          </tr>
                        </thead>
                        <tbody>
                          {historicalData?.result?.map((i, index) => (
                            <tr key={index}>
                              <td> {i.time} </td>
                              <td> {i.volume} </td>
                              <td> {i.high} </td>
                              <td> {i.low} </td>
                              <td> {i.close} </td>
                              <td> {i.open} </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Draggable>
          ) : (
            ""
          )}

          {secondTab ? (
            <Draggable
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              bounds=".homeS"
            >
              <div ref={cardRef}>
                <Card className="clear2 handle">
                  <Card.Body>
                    <i
                      className="fa-solid fa-x"
                      onClick={() => setSecondState(false)}
                    ></i>
                    <div className="filterDiv handle">
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          width: "100%",
                          border: "2px solid #041668",
                          backgroundColor: "rgba(12, 52, 240, 0.2)",
                          padding: "5px",
                          borderRadius: "15px",
                          marginRight: "5%",
                          color: "#041668",
                          alignItems: "center",
                          fontWeight: "900",
                        }}
                      >
                        {" "}
                        <AiOutlineSearch
                          style={{ width: "25px", height: "25px" }}
                        />{" "}
                        Filter
                        <IoMdArrowDropdown
                          style={{ width: "25px", height: "25px" }}
                        />
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Draggable>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default HOC(Dashboard);
