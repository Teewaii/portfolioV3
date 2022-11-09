import React from 'react';

import { motion } from "framer-motion";

export default function Socials() {
    return (
        <motion.div className='fixed flex justify-center items-center w-[49px] right-0 bottom-[10%] bg-secondary
        h-[140px] rounded-tl-[10px] rounded-bl-[10px] hover:bg-secondary z-[50]
       scale-[0.7] md:scale-[0.9] md:top-[35%] lg:h-[120px] lg:w-[40px]
        '
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}>
            <div className="bucket flex flex-col gap-[18px] px-[12px] py-[22px]  cursor-pointer
            
            ">
                <div><a href="https://github.com/Teewaii" target='blank'> <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3_37)">
                        <path className='hover:fill-[white]  fill-primary ' d="M21.8663 24.903H3.10406C3.05963 24.8858 3.01408 24.8716 2.96772 24.8606C1.56121 24.5973 0.652031 23.7772 0.226757 22.4121C0.174481 22.2451 0.145517 22.071 0.105957 21.9005V3.10943C0.122911 3.04291 0.141279 2.97214 0.155407 2.90138C0.290986 2.12305 0.695152 1.41715 1.29735 0.906911C1.89954 0.396671 2.66151 0.114508 3.45022 0.109684C9.47846 0.104023 15.505 0.104023 21.53 0.109684C22.4114 0.113585 23.2558 0.465789 23.8794 1.08976C24.5031 1.71373 24.8558 2.55905 24.8608 3.44203C24.8693 9.48633 24.8693 15.5302 24.8608 21.5735C24.8608 23.0455 23.8598 24.3454 22.4498 24.758C22.2576 24.816 22.0605 24.8556 21.8663 24.903ZM10.9603 16.0475C10.7788 16.0163 10.5555 15.9852 10.3351 15.9385C9.05436 15.6696 8.09149 15.0221 7.72697 13.6903C7.65301 13.4099 7.60151 13.124 7.57297 12.8354C7.47619 11.9275 7.6316 11.0847 8.24196 10.3636C8.26686 10.3268 8.28386 10.2852 8.29188 10.2415C8.29991 10.1977 8.29879 10.1528 8.28858 10.1095C8.13599 9.56323 8.17273 9.02754 8.32391 8.48689C8.38678 8.26257 8.49769 8.19605 8.72092 8.22365C9.32139 8.29866 9.83921 8.5711 10.338 8.88601C10.402 8.93129 10.4753 8.96165 10.5525 8.97487C10.6298 8.9881 10.709 8.98385 10.7844 8.96244C11.7881 8.70742 12.8366 8.68467 13.8503 8.89592C14.2467 8.97942 14.5568 8.96102 14.9008 8.72749C15.2938 8.456 15.7466 8.28386 16.2204 8.22577C16.4366 8.19958 16.5553 8.247 16.6182 8.48265C16.746 8.95819 16.8167 9.43656 16.6888 9.91423C16.6182 10.1683 16.6725 10.3388 16.8301 10.5391C17.3726 11.239 17.4404 12.0535 17.3719 12.9062C17.249 14.4255 16.4309 15.4445 14.9644 15.8451C14.6218 15.9385 14.2693 15.9951 13.9047 16.0722C14.2834 16.4848 14.3901 16.971 14.3879 17.4932C14.3851 18.1306 14.3823 18.7675 14.3795 19.4039C14.3795 19.849 14.5914 20.0117 15.0103 19.8702C19.2616 18.4308 21.4226 13.7299 19.5491 9.59791C17.8156 5.77658 13.2619 4.0124 9.42736 5.71289C6.6108 6.9619 4.97682 9.15633 4.78114 12.2474C4.59676 15.136 5.82949 17.4132 8.21935 19.0246C8.75271 19.3848 9.37508 19.619 9.9699 19.8808C10.268 20.0117 10.5414 19.8582 10.552 19.5836C10.569 19.1498 10.5562 18.7153 10.5562 18.2702C10.3182 18.2936 10.1041 18.324 9.89007 18.3339C8.98442 18.3742 8.22218 17.9857 7.89581 17.1203C7.73618 16.693 7.44178 16.3295 7.05727 16.085C6.94989 16.0142 6.88843 15.8727 6.80578 15.7651C6.94707 15.7311 7.08835 15.6943 7.22964 15.6639C7.25384 15.6637 7.27785 15.6682 7.30028 15.6774C7.78419 15.7793 8.10138 16.0949 8.35993 16.4919C8.84879 17.2342 9.60467 17.4642 10.4248 17.1288C10.4902 17.1055 10.5452 17.0599 10.5803 17C10.7159 16.6872 10.8346 16.3694 10.9603 16.0475Z" fill="#DBF66F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3_37">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg> </a>

                </div>
                <div><a href="https://www.linkedin.com/in/ajimati-taiye/" target='blank'><svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3_41)">
                        <path className='hover:fill-[white]  fill-primary' d="M0.0996094 21.7151V3.26582C0.12716 3.12429 0.154005 2.98276 0.182969 2.84123C0.525589 1.18248 1.86993 0.0813751 3.56538 0.0813751C9.52627 0.0813751 15.4874 0.0827904 21.4488 0.0856211C21.7631 0.0873536 22.076 0.127756 22.3805 0.205922C23.9022 0.594424 24.899 1.92835 24.8997 3.56091C24.8997 9.41085 24.8997 15.2608 24.8997 21.1107C24.8997 21.3683 24.8856 21.6273 24.8608 21.8842C24.7941 22.5895 24.5031 23.2547 24.0307 23.7818C23.5582 24.309 22.9293 24.6703 22.2364 24.8125L21.7214 24.9214H3.29905C3.233 24.8953 3.16465 24.8754 3.09489 24.862C2.40219 24.7844 1.7513 24.4909 1.23404 24.0229C0.716785 23.5549 0.359268 22.936 0.211932 22.2536C0.173785 22.0738 0.136344 21.8943 0.0996094 21.7151ZM13.3516 11.0054C13.3516 10.7747 13.3516 10.5971 13.3516 10.4195C13.3467 10.0267 13.1482 9.81445 12.7575 9.81091C12.0388 9.80478 11.3201 9.80478 10.6015 9.81091C10.2136 9.81091 10.0208 10.0147 10.0201 10.3954C10.0201 13.502 10.0201 16.6086 10.0201 19.7152C10.0201 20.0974 10.2002 20.2757 10.5852 20.2764C11.2719 20.2764 11.9585 20.2764 12.6452 20.2764C13.1891 20.2764 13.3516 20.1158 13.3516 19.5688C13.3516 17.9751 13.346 16.3843 13.3551 14.7878C13.3551 14.1757 13.5233 13.6039 13.9055 13.1149C14.3074 12.6012 14.8655 12.4781 15.4716 12.5679C16.0495 12.6507 16.4225 13.0024 16.6288 13.5487C16.8216 14.0611 16.8202 14.5918 16.8202 15.1254C16.8202 16.6303 16.8202 18.1353 16.8202 19.6402C16.8202 20.0896 17.0102 20.2771 17.451 20.2771C18.1942 20.2771 18.9374 20.2771 19.6806 20.2771C20.0613 20.2771 20.2422 20.096 20.2422 19.711C20.2422 17.8824 20.2619 16.0538 20.2287 14.226C20.2144 13.5892 20.1307 12.9559 19.9794 12.3372C19.6813 11.1052 18.9854 10.1888 17.7089 9.83002C16.9041 9.60889 16.0571 9.59187 15.2441 9.78048C14.5165 9.9397 13.9118 10.3006 13.4611 10.9042C13.4271 10.9406 13.3905 10.9744 13.3516 11.0054ZM5.26435 15.056C5.26435 16.5657 5.26435 18.0777 5.26435 19.5921C5.26435 20.1108 5.43107 20.2778 5.94111 20.2778H7.90359C8.40728 20.2778 8.59731 20.0846 8.59731 19.5702C8.59731 16.5541 8.59731 13.5381 8.59731 10.5221C8.59731 10.0267 8.38538 9.80879 7.89087 9.80666C7.24519 9.80666 6.59927 9.80666 5.95312 9.80666C5.45862 9.80666 5.26223 10.0062 5.26152 10.4945C5.26294 12.015 5.26388 13.5355 5.26435 15.056ZM4.78327 6.83522C4.78327 8.01842 5.72848 8.99923 6.91317 8.99074C8.12046 8.98154 9.04095 8.08423 9.07344 6.85928C9.10523 5.66972 8.12399 4.70377 6.92306 4.70306C6.64225 4.70034 6.36371 4.75355 6.10361 4.8596C5.84351 4.96564 5.60704 5.12241 5.40795 5.3208C5.20886 5.51918 5.05111 5.75522 4.94387 6.0152C4.83663 6.27519 4.78204 6.55392 4.78327 6.83522Z" fill="#DBF66F" />
                    </g>n

                    <defs>
                        <clipPath id="clip0_3_41">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg> </a>
                </div>
                <div><a href="https://twitter.com/tiwai_aji" target='blank'><svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3_39)">
                        <path className='hover:fill-[white] fill-primary ' d="M20.7261 24.9158H4.29725C4.2536 24.8977 4.20845 24.8835 4.16232 24.8733C3.23619 24.7496 2.36901 24.3484 1.67452 23.7222C0.980027 23.0961 0.490651 22.2744 0.270574 21.3648C0.220417 21.1631 0.183682 20.9579 0.141296 20.7541V4.2997C0.159689 4.25555 0.17411 4.20984 0.184389 4.16312C0.523477 1.81583 2.41743 0.145771 4.79528 0.141525C9.94095 0.131617 15.0869 0.131617 20.233 0.141525C20.8928 0.141525 21.5399 0.242011 22.1312 0.538518C23.9057 1.43016 24.8743 2.85396 24.8799 4.87148C24.8884 7.94412 24.8799 11.0168 24.8799 14.0894C24.8799 16.138 24.8856 18.1867 24.8799 20.2354C24.8721 22.3074 23.6253 24.0454 21.6826 24.6936C21.3739 24.7927 21.0461 24.8422 20.7261 24.9158ZM5.36891 6.93076C4.59819 8.69494 4.80376 10.2051 6.30988 11.4491L6.27597 11.5199L4.76491 11.108C4.89772 12.8305 5.83162 13.8976 7.44936 14.4177L7.43028 14.4885H6.1149C6.69347 15.9187 7.70438 16.7077 9.22321 16.8478C8.23421 17.6659 6.53876 18.457 4.31491 18.2532C4.41452 18.319 4.47739 18.3636 4.54379 18.4032C6.38406 19.5008 8.37549 19.9113 10.4983 19.6954C12.5512 19.4831 14.3837 18.7521 15.8962 17.3177C17.9533 15.3639 19.0391 12.9649 19.0737 10.1194C19.078 9.7734 19.1748 9.57031 19.4446 9.36579C19.9418 8.98708 20.3656 8.52035 20.695 7.9887L18.9798 8.46495L18.9402 8.38711C19.5902 7.9637 20.0702 7.32421 20.2959 6.58118C20.1924 6.64311 20.0856 6.69911 19.9758 6.74889C19.4199 6.95411 18.8632 7.16004 18.3016 7.34969C18.255 7.35865 18.2069 7.35694 18.1611 7.34468C18.1152 7.33243 18.0727 7.30995 18.0367 7.27892C17.0265 6.24787 15.4441 6.11129 14.3201 6.61514C13.0295 7.19471 12.2679 8.42744 12.3146 9.86257C12.3209 10.0671 12.3435 10.2716 12.3605 10.4995C9.53687 10.2886 7.23601 9.11104 5.36891 6.93076Z" fill="#DBF66F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3_39">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg></a>
                </div>
            </div>

        </motion.div>

    )
}
