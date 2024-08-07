import React, { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { dateTimeConverter, parseJSON } from "../../../../utils/helpers";
import { toast } from "react-toastify";
import { USER_INFO_KEY } from "../../../../utils/contants";
import { productAPI } from "../../../../services/productAPI";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate, useParams } from "react-router-dom";

const REVIEW_IN_PAGE = 12;

export default function ProductDetailReview(props) {
  const [addReviewData, setAddReviewData] = useState("");
  const [reviewData, setReviewData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [reviewEditContent, setReviewEditContent] = useState("");
  const [reviewEditId, setReviewEditId] = useState(0);
  const [replyReviewId, setReplyReviewId] = useState(0);
  const [replyContent, setReplyContent] = useState("");
  // const [checkUserPurchased, setCheckUserPurchased] = useState(false);
  const [starReview, setStarReview] = useState(0);

  const userData = parseJSON(localStorage.getItem(USER_INFO_KEY));

  const navigate = useNavigate();
  const { productId } = useParams();

  const createNewReview = async () => {
    try {
      // if (!checkUserPurchased) {
      //   return toast.error(
      //     "Chức năng này chỉ được thực hiện khi đã mua sản phẩm"
      //   );
      // }

      if (!addReviewData?.trim()?.length) {
        return toast.error("Nội dung bình luận không được bỏ trống");
      }

      if (starReview === 0) {
        return toast.error("Số sao đánh giá không được bỏ trống");
      }

      if (userData?._id) {
        const createReviewRes = await productAPI.createCustomerReview({
          user_id: Number(userData._id),
          review: addReviewData?.trim(),
          product_id: productId,
          star: starReview,
        });

        if (createReviewRes?.success) {
          toast.success("Gửi review thành công");
          getAllReview(currentPage);
          setAddReviewData("");
          setStarReview(0);
        } else {
          toast.error("Gửi review thất bại");
        }
      } else {
        toast.error("Đăng nhập để thực hiện chức năng này");
      }
    } catch (error) {
      console.log("create review error: ", error);
    }
  };

  const getAllReview = async (page) => {
    try {
      const reviewRes = await productAPI.getReviewByProduct({
        productId: productId,
        limit: REVIEW_IN_PAGE,
        page: page - 1,
      });
      if (reviewRes?.success) {
        setReviewData(reviewRes?.payload.review);
        const allItem = reviewRes?.payload.total;
        const total_page = Math.ceil(Number(allItem) / REVIEW_IN_PAGE);
        setTotalPage(total_page);
        setCurrentPage(page);
      }
    } catch (error) {
      console.log("get review Error: ", error);
    }
  };

  useEffect(() => {
    getAllReview(1);
  }, []);

  // const handleCheckUserPurchased = async () => {
  //   const checkResponse = await checkUserPurchasedProduct(
  //     userData?.user_id,
  //     productId
  //   );
  //   if (checkResponse?.data?.success) {
  //     setCheckUserPurchased(checkResponse?.data?.payload);
  //   }
  // };

  // useEffect(() => {
  //   if (productId && userData?.user_id) {
  //     handleCheckUserPurchased();
  //   }
  // }, [userData, productId]);

  const deleteProductReview = async (reviewId) => {
    const deleteRes = await productAPI.deleteReviewData(reviewId);

    if (deleteRes?.success) {
      getAllReview(currentPage);
      return toast.success("Xoá bình luận thành công");
    }
    return toast.error("Xoá bình luận thất bại");
  };

  const createReviewChildren = async () => {
    if (!userData?._id) {
      return toast?.error("Vui lòng đăng nhập để phản hồi bình luận");
    }

    if (!replyContent?.trim()?.length) {
      return toast.error("Nội dung bình luận không thể bỏ trống");
    }

    const createRes = await productAPI.createChildrenReview({
      review_id: replyReviewId,
      user_id: userData?._id,
      review: replyContent,
      author_type: "user",
    });

    if (createRes?.success) {
      setReplyContent("");
      getAllReview(currentPage);
      return toast.success("Trả lời bình luân thành công");
    }
    return toast.error("Trả lời bình luận thất bại");
  };

  console.log("review data >>>>>> ", reviewData);

  return (
    <div style={{ marginBottom: "30px" }}>
      <div
        className="row"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          boxSizing: "border-box",
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <div className="col-sm-2 col-md-3"></div>
        <div className="col-sm-8 col-md-6">
          <FormControl fullWidth>
            <Stack
              sx={{ my: "10px" }}
              flexDirection={"row"}
              gap={3}
            >
              {[1, 2, 3, 4, 5]?.map((item) => {
                return item <= starReview ? (
                  <StarIcon
                    sx={{ color: "#FFD700" }}
                    onClick={() => {
                      setStarReview(item - 1);
                    }}
                  />
                ) : (
                  <StarBorderIcon
                    sx={{ color: "#FFD700" }}
                    onClick={() => {
                      setStarReview(item);
                    }}
                  />
                );
              })}
            </Stack>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
              placeholder="Viết đánh giá... "
              value={addReviewData}
              onChange={(event) => setAddReviewData(event.target.value)}
              style={{
                padding: "8px 10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            />

            <Stack
              sx={{ marginTop: "10px" }}
              justifyContent={"end"}
              flexDirection={"row"}
            >
              <Box>
                <Button
                  variant="contained"
                  onClick={() => createNewReview()}
                  sx={{ color: "white !important", marginBottom: "20px" }}
                >
                  Gửi đánh giá
                </Button>
              </Box>
            </Stack>
          </FormControl>
        </div>
        <div className="col-sm-2 col-md-3"></div>
      </div>

      {/*  */}
      {reviewData.map((reviewItem, reviewIndex) => {
        return (
          <div key={`product-review-item-${reviewIndex}`}>
            {reviewItem?.status === 1 && (
              <div
                className="row"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  boxSizing: "border-box",
                  marginTop: "15px",
                }}
              >
                <div className="col-sm-2 col-md-1"></div>
                <div className="col-sm-8 col-md-6">
                  <Stack
                    justifyContent={"start"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    sx={{ marginBottom: "10px" }}
                  >
                    <div>
                      <h6
                        style={{
                          padding: "5px 10px",
                          margin: 0,
                          background: "rgb(255,86,34)",
                          color: "white",
                          fontWeight: "800",
                          borderRadius: "100px",
                        }}
                      >
                        {reviewItem?.last_name?.charAt(0)?.toUpperCase()}
                      </h6>
                    </div>
                    <div>
                      <h6
                        style={{
                          marginLeft: "10px",
                          fontSize: "1.2em",
                          fontWeight: "800",
                          marginBottom: 0,
                        }}
                      >
                        {reviewItem?.first_name + " " + reviewItem?.last_name}
                      </h6>
                    </div>

                    <p style={{ paddingLeft: "15px", fontSize: "0.9em", margin: "0", color: "#808080" }}>
                      {reviewItem.review_date && dateTimeConverter(reviewItem?.review_date)}
                    </p>
                  </Stack>

                  <div style={{ marginLeft: "10px" }}>
                    <Stack
                      sx={{ my: "10px" }}
                      justifyContent={"start"}
                      flexDirection={"row"}
                    >
                      {[1, 2, 3, 4, 5]?.map((item) => {
                        return item <= reviewItem?.star ? (
                          <StarIcon
                            sx={{ color: "#FFD700", width: "17px" }}
                          />
                        ) : (
                          <StarBorderIcon
                            sx={{ color: "#FFD700", width: "17px" }}
                          />
                        );
                      })}
                    </Stack>
                  </div>

                  <FormControl fullWidth>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={2}
                      value={
                        reviewItem?._id === reviewEditId
                          ? reviewEditContent
                          : (reviewItem?.review && reviewItem?.review) || ""
                      }
                      disabled={
                        reviewItem?._id === reviewEditId ? false : true
                      }
                      style={{
                        resize: "none",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "12px",
                        fontSize: "16px",
                        backgroundColor: "#f9f9f9",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        transition: "border-color 0.3s, box-shadow 0.3s",
                      }}
                      onChange={(event) => {
                        setReviewEditContent(event?.target?.value);
                      }}
                    />
                  </FormControl>


                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "5px",
                    }}
                  >
                    {Number(reviewItem?.user_id) ===
                      Number(userData?._id) ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <div
                          style={{
                            color: "red",

                            cursor: "pointer",
                            fontSize: "14px",
                          }}
                          onClick={() =>
                            deleteProductReview(reviewItem?._id)
                          }
                        >
                          Xoá
                        </div>
                        <div
                          style={{
                            color: "green",
                            cursor: "pointer",
                            fontSize: "14px",
                            marginLeft: "20px",
                          }}
                          onClick={async () => {
                            if (reviewItem?._id !== reviewEditId) {
                              setReviewEditContent(reviewItem?.review);
                              setReviewEditId(reviewItem?._id);
                            } else {
                              if (!reviewEditContent?.trim()?.length) {
                                return toast.error(
                                  "Nội dung bình luận không được bỏ trống"
                                );
                              }

                              const updateRes = await productAPI.updateUserReview(
                                reviewEditId,
                                reviewEditContent
                              );
                              if (updateRes?.success) {
                                const listReview = [...reviewData]?.map(
                                  (item) => {
                                    if (item?._id === reviewEditId) {
                                      return {
                                        ...item,
                                        review: reviewEditContent,
                                      };
                                    }
                                    return { ...item };
                                  }
                                );
                                setReviewData(listReview);
                                setReviewEditContent("");
                                setReviewEditId(0);
                                return toast.success(
                                  "Chỉnh sửa nội dung bình luận thành công"
                                );
                              }
                              return toast.error(
                                "Chỉnh sửa nội dung bình luận thất bại"
                              );
                            }
                          }}
                        >
                          {reviewItem?._id === reviewEditId
                            ? "Lưu thay đổi"
                            : "Chỉnh sửa"}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        fontSize: "14px",
                        marginLeft: "20px",
                      }}
                      onClick={() => {
                        if (userData?._id) {
                          if (replyReviewId !== reviewItem?._id) {
                            setReplyContent("");
                            setReplyReviewId(reviewItem?._id);
                          }
                        } else {
                          toast.error(
                            "Vui lòng đăng nhập để phản hồi bình luận"
                          );
                        }
                      }}
                    >
                      Phản hồi
                    </div>
                  </div>
                  {reviewItem?.children_review?.length ? (
                    reviewItem?.children_review?.map(
                      (childrenReviewItem, childrenReviewIndex) => {
                        return (
                          <div
                            key={`children-review-item-${childrenReviewIndex}`}
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              marginTop: "12px",
                              width: "100%",
                            }}
                          >
                            <div style={{ width: "90%" }}>
                              <Stack
                                justifyContent={"start"}
                                flexDirection={"row"}
                                alignItems={"center"}
                                sx={{ marginBottom: "10px" }}
                              >
                                <div>
                                  <h6
                                    style={{
                                      padding: "2px 5px",
                                      margin: 0,
                                      background: "#3CB814",
                                      color: "white",
                                      fontWeight: "600",
                                      fontSize: "14px",
                                      borderRadius: "50px",
                                    }}
                                  >
                                    {childrenReviewItem?.author_type === "admin"
                                      ? "Q"
                                      : childrenReviewItem?.last_name
                                        ?.charAt(0)
                                        ?.toUpperCase()}
                                  </h6>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                  }}
                                >
                                  <h6
                                    style={{
                                      marginLeft: "10px",
                                      fontSize: "14px",
                                      fontWeight: "600",
                                      marginBottom: 0,
                                    }}
                                  >
                                    {childrenReviewItem?.author_type === "admin"
                                      ? "Quản trị viên"
                                      : childrenReviewItem?.first_name + " " + childrenReviewItem?.last_name}
                                  </h6>

                                  <p
                                    style={{ paddingLeft: "12px", fontSize: "0.8em", margin: "0", color: "#808080" }}
                                  >
                                    {childrenReviewItem.review_date &&
                                      dateTimeConverter(reviewItem?.review_date)}
                                  </p>

                                  {childrenReviewItem?.author_type !==
                                    "admin" && childrenReviewItem?.user_id === userData?._id ? (
                                    <div style={{ marginLeft: "15px" }}>
                                      <div
                                        onClick={async () => {
                                          const deleteRes =
                                            await productAPI.deleteReviewChildren(
                                              childrenReviewItem?._id
                                            );
                                          if (deleteRes?.success) {
                                            getAllReview(currentPage);
                                            return toast.success(
                                              "Xoá phản hồi bình luận thành công"
                                            );
                                          }
                                          return toast.error(
                                            "Xoá phản hồi bình luận thất bại"
                                          );
                                        }}
                                      >
                                        <DeleteIcon
                                          sx={{
                                            color: "red",
                                            cursor: "pointer",
                                            fontSize: "16px",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </Stack>

                              <TextareaAutosize
                                aria-label="minimum height"
                                minRows={2}
                                value={childrenReviewItem?.review}
                                style={{
                                  resize: "none",
                                  width: "100%",
                                  border: "1px solid #ccc",
                                  borderRadius: "8px",
                                  padding: "12px",
                                  fontSize: "16px",
                                  backgroundColor: "#f9f9f9",
                                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                  transition: "border-color 0.3s, box-shadow 0.3s",
                                }}
                                disabled={true}
                              />
                            </div>
                          </div>
                        );
                      }
                    )
                  ) : (
                    <></>
                  )}

                  {replyReviewId === reviewItem?._id ? (
                    <div style={{ marginTop: "10px" }}>
                      <div
                        style={{
                          textAlign: "left",
                          marginLeft: "10%",
                          color: "blue",
                        }}
                      >
                        Phản hồi
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <TextareaAutosize
                          aria-label="minimum height"
                          minRows={2}
                          value={replyContent}
                          style={{ resize: "none", width: "90%" }}
                          onChange={(event) =>
                            setReplyContent(event?.target?.value)
                          }
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          border: "1px solid rgb(218,218,218)",
                          width: "90%",
                          marginLeft: "10%",
                          padding: "5px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          sx={{ padding: "2px" }}
                          onClick={() => {
                            createReviewChildren();
                          }}
                        >
                          Gửi
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-sm-2 col-md-3"></div>
              </div>
            )}
          </div>
        );
      })}
      {reviewData?.filter((item) => item?.status === 1)?.length ? (
        <div
          className="row"
          style={{
            marginTop: "50px",
            marginLeft: 0,
            marginRight: 0,
            justifyContent: "end",
          }}
        >
          <div className="col-sm-2 col-md-1"></div>
          <div className="col-sm-8 col-md-6">
            <div
              className="row"
              style={{
                justifyContent: "center",
                marginLeft: 0,
                marginRight: 0,
              }}
            >
              <Stack
                spacing={2}
                flexDirection={"row"}
                justifyContent={"center"}
              >
                <Pagination
                  count={totalPage}
                  color="secondary"
                  defaultPage={1}
                  page={currentPage}
                  onChange={(event, value) => {
                    getAllReview(value);
                  }}
                />
              </Stack>
            </div>
          </div>
          <div className="col-sm-2 col-md-3"></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
