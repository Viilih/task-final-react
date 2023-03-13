import { ThemeProvider } from '@emotion/react';
import {
	Box,
	Container,
	Grid,
	Typography,
	TextField,
	Button,
} from '@mui/material';
import Swal from 'sweetalert2';
import { useState } from 'react';
import theme from '../../../themes';
import onePieceImage from '/public/imgs/onePiece.jpg';

import Card from '../../components/Card';

const Movie = () => {
	const movies = [
		{
			title: 'Truque de Mestre 2',
			description: 'Um filme de cavaleiros mágicos ',
			link: 'https://cinesiageek.com.br/wp-content/uploads/2016/06/truquedemestre-1-768x491.jpg',
		},
		{
			title: 'A teoria de tudo',
			description: 'Um filme que fala sobre a história de Stephen Hawking',
			link: 'https://spdm.org.br/wp-content/uploads/2015/06/k2_items_src_7cee367fd12ab81e6ccfd7ebc32d45ef.jpg',
		},
		{
			title: 'One piece',
			description: 'Anime do piratinha que estica',
			link: 'https://www.einerd.com.br/wp-content/uploads/2020/03/one-piece-netflix-e1584623847979-890x464.jpg',
		},
		{
			title: 'A origem',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolorum.',
			link: 'https://www.lancamentosnetflix.com.br/wp-content/uploads/2020/03/filme-a-origem.jpg',
		},
		{
			title: 'Sword Art Online',
			description:
				'Um jovem fica preso dentro do jogo e se torna o espadachim mais forte para sair dele',
			link: 'https://pixelnerd.com.br/wp-content/uploads/2022/07/sword_art_online.jpg',
		},
		{
			title: 'The last of us',
			description: 'Jornada de dois sobreviventes em um mundo pós-apocalíptico',
			link: 'https://f.i.uol.com.br/fotografia/2023/01/09/167329356063bc6ef807aa7_1673293560_3x2_md.jpg',
		},
		{
			title: 'Sherlock Holmes',
			description: 'O sociopata altamente funcional mais famoso da história',
			link: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaGhofHBwcHR4eGhwfHiEeGh4hJBwcIS4lIR4rHxwcJjgmKy80NTU1HCU7QD0zPy40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xABEEAACAQIEAwQJAQcCBQIHAAABAhEAIQMEEjEFQVEiYXGRBhMygaGxwdHwQhQjUnKy4fFiggdTc5LCFdIkJTM0Q6Kz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQADAQEAAwEAAAAAAAAAARECITFBEgNRcYH/2gAMAwEAAhEDEQA/APPs3d17J2FgPajcj3U/jN2H7BuwIhfZGkTPy9x6UHDxGco206oHfF4taaLgcQLh1CgWMdNIFwZ3vz769LyEU7IHZtJNxvYi3dWsNwQENgXk9YsPCwHxpnHJ7CkSYHSIiwHxo/B8PS7tAf8AdsV8dSKQO+5Hvqakh/H9GVXCbEDuSDtIIgtAuBvF/fSIyAR1OpjDLv4j71b5biSLgOqHSWZNKvOk3IbbYCZ93WhcVz2HiOmhpPZmAYnUCbkC1Sa1bPi24gkZcMAAxDEnn2YFzzFxvSHBEKKhvDnVHQz8oHwqxzzzgKOWl4Nuim35yFZwpRowZJiDbwNvrWJ46Wd/8Dy2IyswkaD5zarPJYkkc4qjx8Qo7Acip8wtXfA3VkxtTaToknY6P1QRsZ0ireprHGXlywTjGdjCfQSAQix4zPv6kd3Sp4OLOGmu50qd5uIIMjwmh5tMscvKNqYqSF1OyyP9OwMgi8XquxeLYcQGgiLQbculSdun8nG8aNn8+qFNSliSQAIJtH57qm+fWbH71T4meQkHeA19JtMd3dS6ZlRsT8et63jjtW2LmYMzPTr33FBbNuzNLsFAtfY7nyqvfMSQAbT3A9OdafMQDF5PcbedFlqWK4e5PaMzJ25TS+DjPhMGBF4Edfw/Si5XDsSfKgcQPs/zChva5TGVyG2bmse6e8bGqbNyQsiDBvFjc/GmFUFoMRob+lT51IBoFwVLACesx50i8pqvzECezbQN994nzvUeEOPWDkYa/Kwn70xniC2me115zzO+3d3UhhobFT2ptHvm9X455ldSjTq6w3dEi3xj4UVH0m3SkMk7aRqknn9PKDTSRMHasu0Dzi6gfwW765/Dwy0QLmbfGfhXRZq6wPf79vjVf+zFTMQIt8uVWJyiLoPVgRy22/L1TKsTyq3zjkKfcfjVW5G4qxz5UJ3IpfHvU3egu1VkFxQGor0FqN8WjXU+j/Csu+ErYl3Ym0kGFvAju+tc1hAQ88kMeYrp+DmMPBKj9EsTPNykyOkg1zrrP7I8W4egw9SJDIQGg2IgnyjnvVDjYJXSeTXFXeYQNjOpb2iBI2urLMcjMW/1VXNlCCSRa/mNqsNLYRgiIon7PN5oZQxI2mJ5n3eFbA/Jqou8rl7DtHnHUEiDp8N6llsrdoYkXFhYhgbnuvShaXUBo2G+02MVYZl1KXYhSexE3tse87361LbGZNQxsBh2pOkCDOwgcusx8ad9GcPUwHM4b7/zoarss3YC6yASQ3MAAEje1omrv0Zk4o6nDc9P1oad/VmbMUWMH/UsfQdK1lz21m3aX51eelmCfXCBb1abd0idtyfnVbgYpI9iwdASWYkEm1pjkeXKtbscrMuOpzbzgJb9GLP/AGg0DIY0Jhdw+p+1NZpowkXquID3yqj61T5Zjpwtov47iOXK/nXOeOtuVDFZmxXY+zpUHuOlauuB4mjE0NJXETEUgRuAmILnYELHv7qqMHDZ8UoomdOwuYUQPpFJZjNYqu4Jj1ZURJBBBtBXnIHyrdmzGeNzl+nT53jqpgEFUVj2U0aSVE32JveSbXFc9lOKMoIZTieLNqFo32iapMxmXxHluWwAhVHcPw0xgtBuzARFv8jpTjxkb/k5/qxbNxiQIwyINyGN7zHxii/+qKyxocQBLBjO+97GZ+ApPDw10yQ/eVNpm3nasGEoOnRiEbxMddzPc3Krkc9ovrnMkM+kRfUfr9KlhM7kjWxAWTLE9O+qvHGmysdM2HdPxrrvRzJqRikrYIvmVY1L01x29KXJYgg/n5tUc8AQo6uvzpTLm8dRTeI0qv8AMtGb6LPb/wBj/wBIqzygnCBt7Z+c/wBqrSIffZG/pXn41e+j2Er4ZRhvhtPvIIPjt5Vm3G+M2ua4hlW16p75AvJ5R1pXI4Pbl5VVkiBMnl8flVnn3BUkGCoF+czH9qpGxH1H+AQTNgQ0ar9Ca1vTGTXQHHwxcOQYECDG5LH3mB3VrEzqCIeZsLHeqPLtqBUqSmokL06aTv7vCiZwqUCBCpDalf2YgRtz3+RpjerJ+JISIYRabHfyqWNxNLDVYc4P22rnczlQmJGG+tCqmdrkSR4g1NACJ8d/f050S2rTMZzDYntW5WNVuPjpyPwpNgfznQGMEg/nSr4zmjNiDrQnxBFCBrTGmtfmMZhQywrCKGRTVkGRrN3r9RXXcJfRl0M29S5g7Htsa47D2f8Al+orr+GpOVUn/k4g9wcT41itzwHDyru4dFAkaryIGrQR7p+VNYXDgpMiYa084BEH3NvU8POaAhmQMPE38VaPhR85jA4ZZBvcd/j3XM1m2pJHEsp2O03+tGyymPfRUwNTlecGOkxPlWjh7QQLXm8nmZrohlXnSQsxMTPS4tuKabHBBGnUpBjvHMzFmG1Cy+CwVbjsyR3SLT76hllZWfaIIjkSenuNSxmXDK46qAFUzFp5CN/ZuauPRkzmB/08T+paomEtAVZgAXYxsTMmIiavPRpP/iQot+7cDpuux6c6nxZ6suPuNYQEBiBfotz05mLVVYaI+A7qAAMXDAgRqAgSR/uJpj0tfTiASNTqthFkiCZFxqMiOgNLcPJ/ZmHV5PgGX7VZ4l75WLPiTRhoeiMf6eflVTgCBhjvPzj6U7xLE/ceCuN9rIfpS2BcYYE7v0gdo/SpPF5dpYDRjJeATe8QAkm87WqizzwzgWBYHy1ff4U5xHG042Ff9S28Qg+ciks0ss0/pj3k7fP4VuMBrhGJteoo8gfnSs0nlQsFrkdJ+dVPXcejPDGfDV1ZJuNLN2hDbgRHIb1bHhjRLBPZMw4dtuigTzNupqg9Cc06lgACO1c7CQAbx/Lz5iuowULY2oiyJAIYFe0VUxAmY6n+3Pluu3CS8Y5TLcJ1FVMz65EM2sWXys3Wup4FGnNERZvhDW8q3lcAHFJJmMyh7jdDcDes4BhEDODo0eMB6W7F48cscBgIZmLU1omO4j5itZTB1c4uZ8zWxjSwHQi0k/Ct44aJie23/Tf5LV76NmEPekfBTVEWuR1R/OB9q6D0eA9W38p/pU1jk6cPVM7QSBvcjpO4E+V6qs+xUqAsyDPKLxAPPlXV4OQQ5ZsSwbWSCZuAoGmOQ+tU74fUT+TVheOK/CJsOY/PzxqYA3gDkffbyvR2ENcHYR0NzUGVaoqs+jYThWWNS6kHPSSyg+HZNjetI+kho3MjpbfxprNziPrbtsBpvuImBHISSYreRxRh4vaiFJUk3Ualgg+d/CjNzSNmBwwQS+IpvyNxbxLG/SlcxhSzEXFgvuAFEU9hUuSHkH3QwnxC+VbzCRqj9JgdW8B76QukitQZamk3mtkUPAdNRZaMFqJWjbMNOy38k/8A7Cuq4X/9pbf1bC/OXIIHukR3VzWGnZf+T/yFdXwjDJyiAQZTEsf5iwg+PxHfWas+hZlAvqZBIHrJjc3k7/egHFb1DqynsMdO/M3kRtBins+2k4Z30qTAPOQPASB86Fn84Dq0pC6mBJvc9rYHqKiKLMK2pd5P1v8AWh5hp06QYCj6nr30/olV5tIC9ZO+28CPOkyjCBA2/Vve/XvrSYNi4hUoFa0A3ixYXn850V8MKrlTsQOVwVBt8/dWYioWQxI533tMG9iOdNuuGQV3InbkdNiL7CI/21WSSz74q39GXJzifyMPiB8qSKIFEWJieptJJvbe1PcAJXMqRuEaP+9ZqXxePpz0h4ezY5awlUmRaQgEAgdw2reWwCuUgjc89p1E7Hz99G43jYhxHZcIAMFOpxMW2HIbdaQONjlYZk0SLDfptNqvsS5OVHz+GfUk/wClvkv2+FByiWwz1Lf1H71Y5xD6tlKsOysExpMi8RexAme6gZDDBXCI56/mxrEvTVjmvSHEl07kTzgGtYkQSSZcm22xjfx+VF4+QcZF6KkgdYH0pPEY3nr+fKukYrQ7z86ClmNGRrGDvvYeO8Utq595qpFpgZqMPQDeS57tgfgoqzy/rCWxlcroQuAsbC0GNrQY2kjrRsr+yKcJFYjFOCA76VZNbFXaQxIJEkWFgOorpsxnMP8AZmd8XUhRldURQrWKm4EggRYHwrjy5ZfHq4cJZ6H6PcTTE0O3ZZ8XCaOUyi9eo+VWvBMID9tvtiNPuDVV5DL5eEGWdWjEw3OHqBYIGVmIM9uINh2htvNWXAlj9tgzOIzAi4IIMX8Ku9JllmuBwUa+kbyJ99awcvGItwZK38SKPgoRDH2ST9aI3ZZeyN1IPv2rpfHm+jNl4Yfyn5qK6D0dwR6uDcFSI/2raqrGNgR0P9SferLg7nRhhVJ7QBiLA2YmSLR0veud8dePVRy7n9nKG84oW4sC2kTPPcHuqlzmFpJVrFSZju+gMHyo2ZzOLq0IjMBiBpUzMaf0zNutI53M4j4hYo2GYiCCNt9xvWocqzBDFixjTGkbgwCx2/3fCo4iiezt/kU9lcmWTcghWJvyALH4A0qSIsZHn8edVPhf1UGefX3z86TfKiNNxJk33O81aFPfSzCiVW4mCJvJI+VLHDufwVbYqUliJerGST4dBKU+yUFsOlITKVIKI8aMy1itFuVRsJF7D/8ATH9QrtOB4QOWw7D/AOm8jebt965AL2X/AJB/WtdtwRwMnhzeQwjwP4Kxy8b4gZtDqRoECx63IHzMjwpfOkBCCLFhJHMkkn5/GrHNp2dQFr6rcrCJ8flSOcVdE36Xgrv9j86kK5zYrvqm89d+XdHkalqMC4nnI5ye7pFbxOd7GLAUNlud9/znXRk7kg4CdjYsQLduVt4Xge+syysrOAh9lgZjsEgx47CtHNOhRbMCAeuoEWHcByomNiMmsg6irAG8wSog7XI2owi4OtQyG6qoMe0Yv77xTXDMYYeYZ2BhMJ2K87Op2PO1CwnZgjFtOosJnmFaW2sdxzrSAs2M8QDl8QR0IZRUWerLivFEbEZsIsykiLEACBtPSKVznEC+j96XMgHsaQBOwJ38hVJgHkSRI5Ceh+lGyzYWoA6y0jSRGmehB2jqJrXTF23XZZzF/dX/AOXifArzpXhTymF4P9TWsxiSgv8A/jxfkPtS3C8XsJ4vHka5ydOlvaHGnLYmCpXsph3IB3Mm56yR8K5l23HOdqv+KYxiVgv+7iTH6bySaqcbCUuHZhuDpAkGIsTO1ulb49Rm3b2Xy+XdyIBCk+0QdIHWedWi5LDVwUkshHtaSuoXuIuBE36VDiHEziHVMSwOnkO4RsAIEd1LpidmTuWJ+Gn71fS3+gM7LOWkTJMgBR7gLAUzm+IOcMYejSBIba5B8LbHrR+FxDu47AsWiw7r877VDPkNbRpIIPfHQjadvKs2bXXjynHj3fVtwziWUX94PW4OKpDqB2sNWG4WLhCeu01eL6VYa4uIcMasLFRdQAgo8EHQSB2drHmTEV506Rep5bHKm1T8zT928enTYOIIKi5vvtzoD4glY/iX6bUvk8VWYAtpm09J691bzOGUxVU7ahFb1wztd5loA/lPwdat/RrF7C+/5TVLmhCn+Vvd2krtuAcJwMtl8LEzDEtiKGCj9OoSIjcwRM1z5eOvHd1whzgTHIKKwtEtoMkCCXnYdKnxXPh+wuGQyt7WvWpEEWbnuDNP+l+FkGwxi5dmXFZwpSZgaZLFWuBYQRa8eDXHuF4WBw7K5hE/eucLWSSwIbDZm7JYgAsBsO6tSwsvasyGYc6lKsB6vEvH+h+dI8PSUHgAPIT+d1XPoXmFxswuE2FrVkxJCgKfYNtWoRPiKeyHB8I8ROX0RhqzdnU1gE1RqBk376W9pJ1P9c7l0aSGGxMEGxHKPdQcwnSu24rjcMwsZ8Eqy4iOARGIQeyDGrVEmRVPlMng5jNlFhMJg2nUTCwkzMzMyamrePxzSChYqV6RmMlwlMY4DK6vqCzOIVloK9rUREEX2rn/AEk9HBlszh4YJbDxSumfajUFZSR0ncdRVnJm8bHHMtDda67084Rh5fFRcJCisrEgsWuGj9RJ+m1UHCeFPmcZMHD9pzudlAuzHuA+3Om9aZZcVLihMK9Yz+S4Tw7Th4yHMYxWWkayOhKlgiA8hvHXmsfRzIcRw3bJacHFQCF7SiTMB0M9k/xLt3wRU/Tf5ry4NAYfxCPiD9K6PhHFMP1C4TnSyk72BkgyDtPKKQ4T6P42YzIyqroxNTB9WyBTDkxvG1tyQOc12PEeHcLyDNgY4bGxIWSsNiDnJ2VLcpmD76X+jjK53jHHwAUQC0qWIBvbbwI51z54niRpLypMkEC/kK6z0p4ZkXy75vI6VRGRWTUwdS0LDI+0m+oGD30bjnoun7BkcXL4I9djthKdJZixOG7Md4W6yemnlBpLFsrlUxQxkjkfrWtPcfOu+4jwLI8OyiHMoMfNPdV1MoO0wFNkUT2jufGBwRx5JNhc2Gw7hfarLrNmJYiLqXtEdedo7Om3dtR3wQVaGNt7ydQEDVAvIHnNJZZxC2NtWrr7J2qWRcAtN5VoHfB3+PnVczGBtGomIt47+FPYJ7GL3YOJ8WSqw5kAi0dlZ8YpjBx4XE6HCcA8rsgPlNWpPVWHit5Y9tfEVJcNCLvB5CDH3qGCYdfEVVdOmJ2Wn/l4ke5b/TzrfBgpw0ZzpRSQTYXfsgSx7552G1LZZC7aBMlWW1yAR5bCqHFxSUVf07is50vF2OIciiesOGcRmsmtySQJAsIVYABMD9QrneO5P1eO6JdeyRedOpQ2mT0JikAWOkb8hfwHuplsY3mSeZ/vWePHL63y5bMkhNcNtUEXq1wMqIBdoWJMb+A7++kExSDNazGaJa55R9ftWmc01jZ0O6JGlAwAUbRPxJm5O9GzB7bH+JifM1UKb23Gx6d9OLiTVhygmkbEb7fb86Uri4BDRH0+dN7ioWYEc+vSlONOYHCH0a3lUmAY1EnnAEbczNXeHh4WIZbGRSpiHVyTEGewhA361zi8QdtCOxIQQoJsB4GnsgQWcnVufZj6g1lb0tc2yQ2h1ddLdpZg3Qn2gDzjaup9H+Npi4CYeYSSgCK4m6jaQCIIWbiZrgvWBQ4ncWnrv9K9C9HM1w7FwEVlOE6AKb3ZtydSiGkk7gbxU5eLxvbnPSjgWGqnHwGZ0GnWDBCkwoKsDJXUQLiR1Ndjj4eW/wDTcoczqC6MHRBa7erYgdnlp1b9BVH6T+k+WwsA5PLjWCw1MdQAUEPEkSWLdLRPhSfHvSTAxOG5XATEPrUbD1qA0gKjqZYqAbkbdandzVyTcX/oc+SOYT1criw/ZPrGEQZ7TAL7NRyQ/wDnbj/U/wD/ACrk/QXii4edw3d4QJiSYP8AAx5AmrnK8cwF4o2YbEjBJYh4bmmkWAnfupZ3f8Jep/p30hPCBmcU44xmxw41AesAJAWI0nTER0pP0MKvnE0EwUfug6CJB36eBnurONHhWPjnFOYfttLiHH8It2OgNa4G+WwM6XwMZhl1WzspYywOpQNIMarbUni3102J6MZTFzbMcdmxAVZsIMs9gKBNtUWE865r0u4qcfPYa6SowsRcMBrMTrBZo6G0dwB50vxHjGjPNmcJtQDggwVDDSqsCDtPaFN+lueymNj4OYwX7epPWLpYGFIIa4gkAaT7ulJO0tllxL/isn77BvP7t/6qD/wnKjM4pMavU28NS6v/ABq947xDhWaZWxcZ5RYGlcQCCZ/grkM9nctlsTAxsizFwGOIryRcL2DKgEEFgY8elJ5hfdc/6QazmccvOs4uITNj7Rix5aYjuirf/hqrniGHoJA0Ymsjkmg/+ej3xV7xHjXDc6yti4Rwn0mW1aDIBOkkDSwmACb3NhUcL0syWRwmXJYOvFdRqdiSsxzY9pgpJ7IgTO29N6zCTLurnheWwX4txBdm0YBB5gjSXgja4SSOteRcb1/tOP6ydfrcTXO+rUZ/t3RTnDOOYuBmBmQdb6mL69nD+2G8fgYPKu+zuf4LxCMXHJwMaO1coxjkWAKP3HeOm1PKvseSwbxMQNUTETae6Y35xX0N6K5ZRkcncKzYWGVB2ZzhztIkwGNrwDXm/pZxThyZQ5TIknWyM5Cm+k6pbEftM3KBIF9qH6RekSHIZLDwcxOJgnAaFGl8N0w3UwYA7JKjnM86XtePVUXpjl8zh5pxmzqxDcMPYZP06OiDaOV5vNUmqvSM76UZTiOTGHnSMLM4YOnEA/XHtAAey0DUvlsDXmbrBIsYMSNvd3VYzyh9MxpgEf2HKKMuIU1kjc3A5mARMcvvSpQyLj7RRmUkMNV9zPOB8NpreOQGYxA0E2/L+6nMmyhHEqewd9rvhnx5Gl3y4KA8wetgDeIPOgoBYHTM72pYLPUDOoYZnxEW5aYpZ1UwOxY7yR8PzegugBgQB1I93TaakMNRJJuOVv8A3X/OtMFhw/PNrSCtie+xgmZ5W251WZnCJZoj22geJJED7UxhtDKVQE8wb/k/WiJiI2oOgVpMASNJ6EMSSJ63FMUl6llKki0jcd45VvGxNRgWHICw+FCRLN3R8xWLUawQrS74dMBr0NnoTQ8KxqZbS3vvUV3qWIbnxo0aGJa29YBzoSp2Qed6uf2vDOWRdA9apgMNyNxPvPwozhDAAmWBjnsfgwIqx4flWJfRyaxJAEd4t8qArlEOtjqYQF69J6KOlK4J7Pn40L4YxU9oEiQYjeY+NO8Lz/qlMH2jse78PlTHCsAaVaHIO40oUI53LyYEbCRems3kEbXpVkKglh2CRzAsZvv086ElU2Jod9bHc35VNMLCmJ+3wO1OY/D4QMqBgfZhe0Z2ELOo85mqsp5iLAeP2oZVlkgiuSuiNOIJ7U3RhzMc+lVxArQjpUlYHl50VArJ5VdAwijuvaJ3g+UeVSwsLC0Iye2bNfmN7Wtbp+retYm3hRKEaC4ogNRdaMF3pbENM4lLOaNQu5oTUR6G1FCahOaK1BahAyagTUjUTRY2KytTWpoWG8Mi09/ugWqeXaSZPIx40JWiKJETbfp8q04jJjKCAwDLFwTEE73F6LneGOBrQKUIm0WEXI67+O1JNuLU7hNYAExB/PCpY1LhPAZh+odb3HQbAnr+Cpoxkg4nTYMQfIz5+YprCyAf2IDSAVkCZ5iY251riPDjguVYyLQ2kw09JMT3TUrc80kVJuefQX/ImiaWgAuZiIIFhyvvtUSFIhQd+YufC5reGO8g+Ujx350VYjKjSbKTKXnskE9xttzPlS/Fck2G6grGpZFmA3IPtc/A/amcJiqPuIOHEFupuCefhS3FM076S7O0WUs2ox7yY5WokIsaiBO1ZUtXiPfRsy/DHVC7CAItBm5jeI+NJtRhiNGmTHTlQ2F6AuC0WNHy+NovN+Vrj3mwoKx+q/z+NYmHP+fvREsRySSdyZNPcNzRQEBVMke19/OkDR8k8E2Puj60Sm0z2KBAe3+08o5joT50/g4iHfMYyEi/ZkXMkdhriZNLrjqLEN3SnLr4UyXwgbk/9sHyk0Oy6Yz4ZIw8QspN5WA3ISGn8NFy+KkH1iT002M+JbarjIcPTF9iwMyzD3C28kg/9vKaJxThmHgLqJL/AMUACO6C0k2PhF+VTTL65vE0k2UqD76gUKnb71cLmcILfBeDtcGfjtQ8TBDNqjSs2U3JHf51UqWVypALGzNeOlGZLVtWjc0JsSLmgEBQnNTd/wDNCc0YCc0piUfEagtRqFmoTGjvSrmiosaG1bJqBoRBqGaIxoZorYrUVta1NAQmplzWA1sGrrDNZtTOWe16XmsmmrYcLVphKxykG8QD1vA2JpP11W/C3wgyLjzpxPZZf0mYuZ+h5UtScbKTOGpAYMsm5mbHblMif8VLCePaEyeRHvsNxB+lH4xkGwcV0JLBTYgiSphgYiAb+dLBiuwMGe6d/EAwajaeK7QQoIDbz3bEdN++lXJi5n3/AIaNjYjAxa3MbXER8PnQtBNvz40WBRWaaKMvvJ232+9bXAMEyIH1/wAGi6EoIvUsRCDesdLSKYzxBfUs6TcHx3+JNAspqamhjeiop6E/Kgw0bLIZkb9OdQXDN+78+lTGGRy/xt86CzwVOkzIPjuO4R1+c8qYRrx226ybTEWifOkcDNwAptHPerHAxSQGIIBNmgkH8vt0ozbVzwwBXTQrQqzc9I1ExYSYEdSKW4txEvjFIBRZG+5tqbUB0AHgokUrjcQbCRishjABIuOUkEWJBPPpVWrupRiImQpNgYsfnFRfixwogNA/yamWG4qvwXOhywOiYmLSJMA9ftW0zAVRplo5c46zyFViwwuMSAYPP7VHFxPyaAudW5NuUb28t++sxCDMHnaJuPyPOhjaYgBkidj43tQ2cxE7mfOpu5MKCFtz2jb88ajiKAggGWiD7zNvcLHrRQGxKEz1sLPgTv8A25UB8UCRvFu499FRxHoDGpO3Sh6oNBEmok1omtE0GiaGTW2ahzRW9VbmomsiiGcArMNPj0HO3PzqzHDkYSjqY9rtTA5WKgg++BVWsEiT+eNSQMplSZG0G/mO6jWL9eFYeGhbEcMwiQJI8FKkyfGqnMYB3HsmeYJHOCV5xFM5DjDLIeWHjpa9jDDnB5jyqXFOKMzdhVCXEG7MDHtHcmRvyvemp+VQyRV7lM0gwFCMUfWA8AEst4iZ2k9KpXzDHePKoriMLg/AVNa/NXmZ4c4VGVy2oICzwuibLMmQCo32Ekb3oWLwx0EkXm0GQ+5lYEQBuSb2quGaePaPd8OXlajYuYxOzLuSBAljYbwOgvVSxLGcAaRMW3gzHy52mgF/D876PiMjkTK8id++T1O9YMna2reJ0ncQSIj/AFL50QBQdtvzupzBwzrXU1hEiYMbkTG5HhvFLNl7E6rgAxG8++1DDlbSd/jQw4wRlE65JbbTojde0bm0yfCiHhg0swxU0yAt2LMORjQPwGlcvmoMONaEnUptJPMEXDd/3p8ZBHGrBdX5lG7Ljw21fPuNFxvKcPw7K7MrMRHZaQLiYAJMkWsfnTGX4fqeEMqJn+IhQT7M7QNze81Uhknd0P8AqExyvEH4Gp4GASew6EiI7egmemvT9KGLZ8B1awBYsbQW0naOyQAflvaJDRyeIyhSEJUmC2q7CSV7Z0liFvt49W/R/geIyB3YqxcAKbHSp7R8DG/MAXpHM5rXm8RwAMPDJkgCFVZAjo5YwD1IPK00wquAHsEGqSAEBJtfYTbvNbwUdTpB0qQTJbkARcdIMQe+inMqNBX922qQIGhRCgHUWJadIB1Dl7qL6TuiaE0gvpDO0zJMkgkGTfnMmiSLHgubVkLk6uRk3gbggzNgOnOqTimaVsRWCqFHKTpjvgz5RSWSzWg9zSGF4i0Hxn5Uzm+HkmQRBmLgeBJ26dKqZlFz3E2fSrAaFEKq2Cjex623+9aVWQDtgBlnVIYQdlKjl13vSWSx0j94hYHmDDDw5ee/up7IoYJQq6x2kaFO9wNU3sDAnl4UUIOGjUyjYH5g2Eco8qIWS99toiDyG/dHSoZ/KYelXw2ILW9WQ08vZbbmLTz9wr5WN/7fkULDJcz57H70LHxGgG/nsefhvUSE0g6vETfeKhAkhXta4/OtEZ6s6b7SJHw896C+Aw5f3ojoTcse6T8p35Uuz3uZ770UYAFP1Ssx0oDYLbgGPD61p8QTuTe5vU3dNXZcjvvv76IA6Eb0IimExW5MbbfPyojZDFcawpI3m3jMdIoaQrRXpTS5UxLdYG1958jQcTKsDEjcXm3y+lGgWkb1rVRf2RtUW3jew2uegv8AA9KjiZZgYke4gjzodLjg2UTEdvWNpRV1E+8WA3JIkW8eVBxMs2o6bySABc9YAA+X1rKygzFw4ABMtzEQV6X5zY0vpI2rVZQbI6iO/lUxlpupB/PzesrKihsjDcEVrUeprKyg3rMb0yvEcTqCL2IECwHLYwB5CtVlUW/o1l0zDuuJZtGpYJWSDeT/ABSRHiaa4x6NsiroUM+thCaiGQgMHLNteRJPdyrKys0ayHAMVNLs6YTd7gsPcoi/81dBnMouMgQprdQxXEUFL9773ttP0OVlPifVDnuFiIfHTXJADqV2MWxlBVtrSOX6aqM5wl0YLIYkSsSZ+FzMbdRWVlVV/m8XCw8EYuCwV5CoggFQBp1MBYuYJJMg2mqzKY0rBUaT2n0CJNwpI2tqNgALnxrKyqyscLhyFTikjQoB0mBqPJQDIJ587AfxVma4NiOJXEVtUEypW/cWv8qysrnytnjp/HxlvZQ8A0K2rHwgxX2SWE+8iLWNF4RxIYQKYr7DsOjBo6owE9kxtHM9TWVlanjP8nVVfr0DtzQmZuCdj3WkeNZlc0Vf920HaSOyRvDKbEb1lZWmWZxXS4Y33gyjDeASOX8JH90c1mC51ECeZ6+PU1qsqNcSxatoaysovLxs+NQNZWVURmtEVusozWYeCzGFBJ7vP6UdyygAqFIHMAkze873FbrKHwFcaPa7QEQJsYOxj9P9tqLgKGJv2TFrMxM7RuIE38K3WUIxkPtCQTyPlaCSRY8rXpeB1HlNZWUH/9k=',
		},
		{
			title: 'Vingadores: Ultimato',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolorum.',
			link: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4BA82B57752DD611917C0EAAD80F74137B7A0C2C492896604410A499F3EF7400/scale?width=1200&aspectRatio=1.78&format=jpeg',
		},
	];

	const [search, setSearch] = useState('');

	const handleSearch = e => {
		setSearch(e.target.value);
	};
	const showAllert = () => {
		Swal.fire({
			title: 'Sua avaliação foi enviada com sucesso!',
			background: '#333333',
			color: '#90FF8D',
		});
	};

	const filteredMovies = movies.filter(movie =>
		movie.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ padding: '1.8rem ' }} height={'100%'}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Typography variant="h4" textAlign={'center'} color={'#1E6F9F'}>
						Filmes, séries e animes
					</Typography>
					<Box
						component="form"
						sx={{
							'& .MuiTextField-root': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
					>
						<TextField
							id="outlined-basic"
							label="Pesquise um filme"
							variant="standard"
							onChange={handleSearch}
							color="labelSearch"
						/>
					</Box>
				</Box>
				<Grid
					container
					spacing={4}
					padding={'1rem'}
					display={'flex'}
					justifyContent={'center'}
				>
					{filteredMovies.map((movie, index) => (
						<Grid
							item
							xs={4}
							display="flex"
							justifyContent="center"
							alignItems="center"
							key={index}
							height={'100%'}
						>
							<Card
								title={movie.title}
								description={movie.description}
								link={movie.link}
								like={0}
								dislike={0}
							/>
						</Grid>
					))}
				</Grid>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						padding: '1rem',
						gap: '1rem',
					}}
				>
					<Typography variant="h5" textAlign={'center'} color={'White'}>
						Tá afim de mandar sua avaliação dos filmes, séries e animes que você
						assistiu?
					</Typography>

					<Button variant="contained" color="btnColor" onClick={showAllert}>
						<Typography variant="inherit" color={'white'}>
							<b>Enviar avaliação</b>
						</Typography>
					</Button>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default Movie;
