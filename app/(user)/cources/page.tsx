import classNames from 'classnames'
import CourceBlock from '../../../components/CourceBlock'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { bold, medium } from '../../../fonts'

const preaching = [
    {
        img: "https://static.wixstatic.com/media/nsplsh_536b4f6942445967586449~mv2_d_5304_3537_s_4_2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_536b4f6942445967586449~mv2_d_5304_3537_s_4_2.jpg",
        title: "თეოლოგია",
        lessons: [
            "ბიბლიოლოგია",
            "ღვთისმეტყველება",
            "ქრისტოლოგია",
            "პნევმატოლოგია",
            "ანგელოლოგია",
            "ანთროპოლოგია / ჰამარტიოლოგია",
            "სოტერიოლოგია",
            "ეკლესიოლოგია",
            "ესქატოლოგია",
        ]
    }, 
    {
        img: "https://static.wixstatic.com/media/nsplsh_55624a4d7939327038776b~mv2_d_4570_3047_s_4_2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_55624a4d7939327038776b~mv2_d_4570_3047_s_4_2.jpg",
        title: "ჰერმენევტიკა",
        lessons: [
            "ძირითადი ჰერმენევტიკა",
            "მოწინავე ჰერმენევტიკა",
            "ძველი აღთქმის ჟანრების I/II ინტერპრეტაცია",
            "ახალი აღთქმის ჟანრები I/II ინტერპრეტაცია",
            "დისპენსაციონერიზმი",
            "ღვთის სამეფო",
            "ძველი აღთქმის გამოყენება ახალიში",
            "ბიბლიის გეოგრაფია",
        ]
    },
    {
        img: "https://static.wixstatic.com/media/nsplsh_3277476a6a583851622d67~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_3277476a6a583851622d67~mv2_d_5184_3456_s_4_2.jpg",
        title: "ჰომილეტიკა",
        lessons: [
            "ექსპოზიციური ქადაგება I",
            "ექსპოზიციური ქადაგება II",
            "განმხილველი ქადაგება III",
            "ექსპოზიციური ქადაგება IV",
            "ქადაგების თეოლოგია",
            "შემოქმედებითი სწავლების მეთოდები"
        ]
    },
    {
        img: "https://static.wixstatic.com/media/nsplsh_6551325a39617939577773~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_6551325a39617939577773~mv2_d_5760_3840_s_4_2.jpg",
        title: "ენები",
        lessons: [
            "წერა და კომპოზიცია I/II",
            "ინგლისური ენის შესწავლის დასაწყისი I/II*",
            "ინგლისური ენის შესწავლა I/II*",
            "NT ბერძნული I / II*",
            "NT ბერძნული ეგზეგეზა და სინტაქსი*",
            "ებრაული გრამატიკა*",
            "ებრაული ეგზეგეზა და სინტაქსი*",
            "რუსული კვლევების დასაწყისი I/II*",
            "გაღრმავებული რუსული კვლევები I/II*",
        ]
    },
    {
        img: "https://static.wixstatic.com/media/nsplsh_646e4c6d4170636d4e4867~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_646e4c6d4170636d4e4867~mv2_d_7360_4912_s_4_2.jpg",
        title: "ძველი აღთქმა",
        lessons: [
            "ძველი აღთქმის შესავალი",
            "ძველი აღთქმის ფონები",
            "ძველი აღთქმის I/II კვლევა",
            "დაბადება 1-11",
            "ლევიანები",
            "ტყვეობა და დაბრუნება",
            "დანიელ",
            "ანდაზები",
            "ესაია",
            "მთავარი/მცირე წინასწარმეტყველები",
            "ძველი აღთქმის თეოლოგია",
            "ძველი აღთქმის გამოყენება NT-ში",
            "ძველი აღთქმის Book Studies (ჯოშუა, მოსამართლეები, ესაია და ა.შ.)"
        ]
    },
    {
        img: "https://static.wixstatic.com/media/fe91c4_6d147a8b773b4b0990941e03fec1a455~mv2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/fe91c4_6d147a8b773b4b0990941e03fec1a455~mv2.jpg",
        title: "ახალი აღთქმა",
        lessons: [
            "ახალი აღთქმის შესავალი",
            "ახალი აღთქმის ფონები",
            "ახალი აღთქმის კვლევა I/II",
            "მარკოზის სახარება",
            "იოანეს სახარება",
            "აქტები",
            "რომაელები",
            "I კორინთელები",
            "გალატელები",
            "პასტორალური ეპისტოლეები",
            "გამოცხადება",
            "ახალი აღთქმის თეოლოგია",
            "ახალი აღთქმის არჩევითი საგნები: (ტიტე, იაკობი, თესალონიკელები, ფილიპელები, ებრაელები და ა.შ.)"
        ]
    },
    {
        img: "https://static.wixstatic.com/media/nsplsh_77637a727333556e666e6b~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_77637a727333556e666e6b~mv2_d_5184_3456_s_4_2.jpg",
        title: "პასტორალური თეოლოგია",
        lessons: [
            "პასტორალური თეოლოგია I/II",
            "მწყემსობის თეოლოგია",
            "სულიერი ლიდერობა",
            "სამინისტროს ფილოსოფია",
            "მინისტრის სტაჟირება*"
        ]
    },
    {
        img: "https://static.wixstatic.com/media/fe91c4_e9ffef615a384328b808f9f50920b2bc~mv2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/fe91c4_e9ffef615a384328b808f9f50920b2bc~mv2.jpg",
        title: "პრაკტიკული თეოლოგია",
        lessons: [
            "ქრისტიანული ეთიკა",
            "აღზრდის პრინციპები",
            "ქორწინება და ოჯახი",
            "ფული და ფინანსები",
            "სულიერი ფორმირება",
            "ლოცვის შესწავლა",
        ]
    },
    {
        img: "https://static.wixstatic.com/media/nsplsh_473179685531456a2d3941~mv2_d_8256_5504_s_4_2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_473179685531456a2d3941~mv2_d_8256_5504_s_4_2.jpg",
        title: "ბაპტისტური სწავლება",
        lessons: [
            "ბაპტისტის განმასხვავებელი ნიშნები",
            "ბაპტისტური პოლიტიკა",
            "ბაპტისტური ისტორია",
        ]
    },
    {
        img: "https://static.wixstatic.com/media/fe91c4_8ef62e52f17b4424b49c366e9f87d0f0~mv2.jpg/v1/fill/w_388,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fe91c4_8ef62e52f17b4424b49c366e9f87d0f0~mv2.jpg",
        title: "თანამედროვე თეოლოგია",
        lessons: [
            "სახარება და მართლმადიდებლობა",
            "თეოლოგიის თანამედროვე საკითხები",
        ]
    },
    {
        img: "https://static.wixstatic.com/media/nsplsh_6c554f2d426a43695a4541~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_6c554f2d426a43695a4541~mv2_d_6000_4000_s_4_2.jpg",
        title: "ისტორია",
        lessons: [
            "ეკლესიის ისტორია I",
            "ეკლესიის ისტორია II",
            "მისიების ისტორია*",
        ]
    }
]
const church = [
    {
        img: "https://static.wixstatic.com/media/nsplsh_6579664d6747766f395041~mv2_d_3527_2408_s_4_2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_6579664d6747766f395041~mv2_d_3527_2408_s_4_2.jpg",
        title: "მისია და ევანგელიზმი",
        lessons: [
            "ევანგელიზმი",
            "მოწაფეების კეთება",
            "აპოლოგეტიკა",
            "ეკლესიის გაშენება",
            "მისიათა თეოლოგია",
            "მისიების ისტორია",
            "მისიების შესავალი",
            "კულტურის სამინისტრო",
            "კულტები და მსოფლიო რელიგიები"
        ]
    },
    {
        img: "https://static.wixstatic.com/media/nsplsh_476253434141735532466f~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_476253434141735532466f~mv2_d_5184_3456_s_4_2.jpg",
        title: "მუსიკა და თაყვანისცემა",
        lessons: [
            "შესავალი მუსიკაში",
            "მუსიკისა და ღვთისმსახურების თეოლოგია",
            "მუსიკის მსახურება ეკლესიაში",
            "გუნდი",
            "ტექნოლოგია და მედია",
            "ინსტრუმენტული გაკვეთილები*",
        ]
    },
    {
        img: "https://static.wixstatic.com/media/fe91c4_8abf7c0daf574f7282a52a8381f0b6c7~mv2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/fe91c4_8abf7c0daf574f7282a52a8381f0b6c7~mv2.jpg",
        title: "ეკლესიის მსახურება",
        lessons: [
            "ეკლესიის ადმინისტრაცია",
            "ბავშვთა სამინისტროები",
            "ახალგაზრდობის სამინისტროები",
            "ბანაკის სამინისტროები",
            "განათლება ადგილობრივ ეკლესიაში",
        ]
    },
    {
        img: "https://static.wixstatic.com/media/fe91c4_db6eaba6b04c4158941e91b5becf65e6~mv2.jpg/v1/fill/w_388,h_325,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/fe91c4_db6eaba6b04c4158941e91b5becf65e6~mv2.jpg",
        title: "ქრისტიანული კონსულტაცია",
        lessons: [
            "ბიბლიური კონსულტაცია I/II",
            "ქორწინებისა და ოჯახის კონსულტაცია",
            "საკონსულტაციო დამოკიდებულებები",
            "ძალადობის მსხვერპლთა კონსულტაცია",
        ]
    },
]


type Cource = {
    img: string,
    title: string,
    lessons: string[]
}

function Cources() {
  return (
    <div>
        <Header/>

        <div className='mt-32 flex flex-col items-center justify-center max-w-7xl mx-auto min-w-80'>
            <h1 className={classNames(bold.className, 'text-center text-2xl mb-3')}>კურსების აღწერა</h1>
            <p className={classNames(medium.className, 'text-sm text-center max-w-4xl px-6')}>
                შემდეგი კურსები ხელმისაწვდომია  მოდულის ან საცხოვრებელი ფორმატში. ვარსკვლავით (*) მონიშნული კურსები ამჟამად არ არის შემოთავაზებული და შემოიფარგლება მხოლოდ საცხოვრებლის სასწავლო პროგრამის სტუდენტებით.
            </p>

            <hr className='w-full mt-10 text-black px-20' />

            <div className='mt-16'>
                <div className='text-center'>
                    <h3 className='text-2xl'>სექცია</h3>
                    <p className={classNames(medium.className)}>ტექსტი ტექსტი ტექსტი ტექსტი</p>
                </div>

                <div className='grid grid-cols-1 justify-center w-[100vw] mt-10 max-w-5xl mx-auto xs:grid-cols-12 xs:gap-6'>
                    {preaching.map((cource: Cource, index: number) => (
                        <div key={index} className='col-span-12 px-2 xs:col-span-6 sm:col-span-4 md:col-span-3'>
                            <CourceBlock title={cource.title} img={cource.img} lessons={cource.lessons} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-20'>
                <div className='text-center'>
                    <h3 className='text-2xl'>სექცია</h3>
                    <p className={classNames(medium.className)}>ტექსტი ტექსტი ტექსტი ტექსტი</p>
                </div>

                <div className='grid grid-cols-1 justify-center w-[100vw] mt-10 max-w-5xl mx-auto xs:grid-cols-12 xs:gap-3'>
                    {church.map((cource: Cource, index: number) => (
                        <div key={index} className='col-span-12 px-2 xs:col-span-6 sm:col-span-4 md:col-span-3'>
                            <CourceBlock title={cource.title} img={cource.img} lessons={cource.lessons} />
                        </div>
                ))}
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Cources