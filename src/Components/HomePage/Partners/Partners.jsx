import React from 'react'
import './partners.css'

const revivalImage = 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_632,q_75,w_640/v1/crm/johnstoncounty/Revival-6-1-_B358E758-9B0F-A367-D5BFA4B1A6FA6B38-b358df4bbae79f2_b358ece2-a8b7-fa56-27662d65877137e5.jpg'
const vinsonImage = 'data:image/webp;base64,UklGRrYXAABXRUJQVlA4IKoXAADwZQCdASoEAZcAPvlmp06qpaMpslfNyVAfCWc/gKlbjyA0MtfObABiVf/4b+p/uS78868/SBPrvd/D+DHV94J4QaDJ00oE/Rv7r54E276gZdqAvGvcAsbrcwDIrApoScM7UeKMhjW5P76umnUhMVLECm2IoMXKrtHJEQkPCIxk7i25OkzY1/Bl5yKptArS7n9iEpCBfP5D4rvD8bYPEd9yIMnTVVpvBIxc186UXt74IvYBPbEA899kvDUKXprzS7Q+fkD1FT4vuHVpmfDxt6TG/8LwBBkRnVSoCWvAVbJsM9QRMKhVNQdWsQr0d+8OzHzUSWj2W46c+6DXRnwN6gzeS+P7rzpy59YzPE7H+5TArcH/qWgS1GJPa0TKyr4dC9wcy3avtw1c3cRsrmu3ylxaj5kPLaQ083ovV9ZkReRbWexwTr5DP8J6kARB3l1WZS01mchEc3TN6hXWD10o3+IrVBc9gYOMMch/B16xXm1JGRyL0q/BzzIKEce9xuSJw7pFS5DMLOh9HFDPIlH4yNPbHC3txZVw7RxPVOdxed91uS0bQotlvHqjJfXs/YwnUkHuPE9s1Fr+lN1sh0M+rThEQylodewAYMYECkqenFOlV18SMlW5rO3lsSLzSYt1T1hHNKHw5X5vyIzH/LglCCB9DsFR+iAtMim696xFTjz+Uld8Pb+UTF2zJV6TUwO9AAm18mmmRYdVUScN3iwxYMHROu4pJNTk1QEMps6sCu+7iqjXOiBdxttvzRcETf+4VeINyQwLQ1HZaXk8ACqx5v+2bxXJ1UJf9d2aircg6A3ksfaOevF9Tmv18I6sDYtPNhSocYVeAdTVO6PODNGFygHwt33uz9yU72tf0ghVMUXSRXdEvyRKPfYbdjyuZMPyc5IBD00n5ZVZxKGQ9Wwt7hiCaTrWwFIZvMEL/FBFqOZqAkD1wZ+05eGnauFE8/S/sCprQT55pcPXDU4xyQhmBwdStjdGCDzsI2NU3TAVd67ge0F/QfJhT1w2IGBby1o9yw8QUWYCLAgLv15kLaOUPFyON1QO86ECzSI2qqSMosnAIQ3hh5J0BK6dFgnGXsufMjKpgEO8nXrZAAD+02AcgQ7vS0Oc5l5yI6WrmNXlgyJMGxHWwsIFfL05Qxo/HVmTvJ6Gxhui02Ec6rDhN7iVucnT2lytwHGBYpZIWdH4kY4Zsp85dH6BSbONHEbQBtph1zSQ09DOxXo+WFnFSVcpd1aZsU6ZEKcCh3PMvKbatlsfF6eSOtg2LX/JXiMgrM6b3ODbJpqaEgvv+dXn3R/dZfwdyVDt5r7bsHy4t7j52t1HQrtH40F1oSpcZvqHVGP1wHUqwJ6ekHKFEzzMajD6FMM0oNoBMx08addKKDWVL84ciQN4YPpcxJTELawHb3n+NijIL4G+71s/hDfheGD9e2/toy+H5qLeIaLjPqeKwFXb7yFdbglqNTG0H0gLWTijqZxKuZmZJEgAqyqhxmFVKOppZZ/D1Bx1zpF7jPIv29U1MVri5LUNXJeWTpFSXGMKVWEZs+vFEn8CJBGnjWtypVXQ52xVmdAhVyVNLZ/tz0LzD+4Zgov1XRXegr7URXmbKJzZKjsTq0C9yFR7zeARpcNfJ7Dn1rQIG0bCB1XcWRP/5V2H/jz7UnTiZlaFs4gT9jh4LBfXFNO25kqrHhO1tSzIdsXQx8iHas5iDqCr91SfL6NsXUWf0w87t7uwQ9hE/BGDUoT7zRvaAWrtSu4bk/u3nydNEYgTPSDQlO2BtlNBgZ84THljTFnBy+Dz4KxET6gwAW+e7C8UEoDcdgLNGim+3i0tdtBr9azQ5QG/nQGcoi7DEhOELiUayYXkE7j2+o9m/zfQ6bNymT2eyaV8YIKLVJfM7fjHkMPw8kD9R3gNbzQvPvs1SxjaQBaPwxKVDCCvNsU7UnhcMQdJVMxPiSq/x0BwI8hQ3kBy0yh/7e1UwGbbmpHEXseeY8ZVXN8Bq7kVz7JctaWwVn3fNscnQyAqdlbGaG/QRROyWFNOmsNnPTziO+1jQn7WcRPsbYxjjM4OvDCs0Pv2Kfifqv77TYP1rPSqqQg73562bJbC1kiNmR6h7DML5j6vbNmg0j+bXwBO7tiWwJxYbnqBohbva+7r8TU+qt6CoJ9SOjWTn5LGT2SNy+XC6bULQIYbuqlxAy8hKEY9dYsfxlwd6rKKMiPK/rq0Xfz44R7obabY+c3e0pIJz/jI33dZaenWfic7jmjJoa7r2xAT3//3fqppqTRexgjq0AEhor9yMrvfKiMff9AcOgKzLIkSqmZ4txTE7VKyD7aiuyUaab7kboteP/YDmHlpUGYyBPpvGQhego1Rtyn845OuXT/Ktq3QreKlfEazLpb4eV02mZ1iwCIeK3n26uy/h0N8bEg9Dwb2/pY7e26j6miSgbUFyVIEvyOdQEd3aA3Dv94ftTnpvT0ZM1hn2tS5v9Jgl/4F/HPmVuOpuKvtXu4vB4mcgOWxDr3RnSAQO8DPAkPA0ETFhHKjlmEARise/okPpPtsXkc1nRpy58jCheiVWR+Cw/8Ip1E6Tku0/O57v9/ocEVppZxTTFr9T+eM2VJrQlbu8vHJrpncJSw2/AMGRhw7xWGNCcTbQxT+xvucYvC0yOqGTmy9/Dw1uEAHp6H1QkhaegqP78xQVnSm5O2PaQPXnTQtZ8bURyToUMCBZCADiXT3L3WwZtgHZnRfqDml3ILjmV3+0BuUDnkWHoziNRCoEdCFoIXS6ZF/G99hRSQpSqf1d0PrImDxGwsc8/1Rn6Y+dZiRGQowK2x5pebliScs2S9T0+JKuZTDWfKbemcF1lFOEVgFXDb7dI3RXymputM2/U+JxMIrJHdk2ihF2nIlj9YTS+c4ZMq2IIpdqccP+7DQMH6pOwpvRvEC3F4XbaPAX3if4DXsRA47EzRYvWQN1y2f8+8EpKBm+4l110/cbYuU8qEA/NMCx70ZtmSWCIxo1oxxJAJqfvhx4oyz23UHlN7o9VfpX84S0RlGn5NzpHs7GzcEgd3yxf2S4Xiwi2x9greS87b5d8j3Xyl2p8NtLFhI3mNKPlBHbQmXcVIlpTx4UGgvQLQPkOYQI44+1KkyOTjB6DIcH62UFMOHyqw+LkPPnJTjrvk2YXc1gMPOThJh86ZGn0rIWfhiAGAHAe2ldBt/v02FrYOBjNo6xMScqxPZq5GoKs/p68zKaAlVYt81uxsl2sSXlTqeh5kCidbGLVAnCLpxj0kVHWl+7VwizLYHlEdod8KNaeJoQuleUJ0FT7fBKvLk5aKOjIW2TeyQCKv8dyJW3rA1m62aNjlCijZzgTRfH4SgxhQLTHPpRIQ1kfRH7xlR34tbd/csUjovgd6pVkLbJaf680q1ZkO96C/4sZc7HuvPqQsVKWLIUFiy3jtph8sAMVrInydh/pGjQj2MDPnFW2YOw8lOPAwqYD3IeQk4heRpw1JxjVPgQNZXewtav3fJA8+S+VQzG0u65PHFuOzRw//IKrr3gcCUgchD6prZkj7Ou2xRIgVzV9zrydKeUCuBV9iLdfUUFjlNgsiX5HmZD+TW8SRIP5SLYN05LFKD0+Wn6h5T/S6FwOik/5jtjSD+qPDhkc/XLLSOyzUJzjFetQkeBslPEzbYz0Y8IupI1XZ5cyXKpup7u6K//JT1FHhNnk+pE8IfqlSC/RBMjWNttg3s+vDkNY1MfB1Co6ex3BRPVetxpwzq11E4c9Bl5i6uFhI5Klena1cUVt0DPo5Z7xf0o0svvwZaX7L8n8MJIQrPpX5kM3uKULvyNrjASnj7K2OmUpxoMhx2hRjcin3T6f3zUEXuIpEjm9fjsHiXhFbggVHsXasU1wRD4ZYW8nmEV38MRA9+3PYexdQWuFsLXwrIrc5dSq+7aporG/b8UIqlbPTRQeTNvD3CpyeDzQV5n1Nkw0WjAvxO7JcAZlu7zVeVBkfudgwOsIn0ECl78G+tTuJtkj95XIAIiP5nrleb+GF3HUpiwG+04+n9porwsJpAgHGSI7F7D6Lhh6tKJjvAqWrimm2uBFx2abF5ZTBjiiW/Ax3qKNFdpSJHhDCwmYAHraTP3CJy/g+lQPN2IWLMuC9ckH+TVXvmhyUi6+t+Fle8ruWA2+6Uta+odealkpytB75VQPCHfqatZmVSSxNFpvQ2g8M9pZVhvFoN/HFm8fq8oXD/+DAE6LxMV3u6/uCyd/2JTHAaQPvNvD65nxbfli06PfCT6f0N7DxZ4V/RhaPj28hx920bZvVEcJWKgGwHgiW4i55e9f50BAqj3fCBtBhgNzJjtlcDF0nb9TwCA8kWldx0gQS6u1x4+o6pMYhsl2LrYI6ath9DGCC3OtV/s+GF5HuJTUXeDS0Ja5UVqtZn9oXqE09LmsjEtSnrERtgJmeh8WFunXVjSQqhrKyvmgZvxUYLUJfa/xXJYjro7bz4HMWhZUv20x3RspdqtDl6bn6+dUcXPfbsr50/sFOZrQzpiQ18v0LoL5bZDW0tg1+G4UCuCgL4eh3SPhGWlo5fxssJgjHxEkO00tXh4Vi/yT+bKpS6nZ08aMpq3b0hbuOtNaXoHdYm9KjLkk7BS5R985oIy1FRdvY7LJQP5aslvq7JlNDrv5Mn5asz8VmNpfqVocMVFYit8Nd7Im1ytm2NbX7bT/8r/T+FoEKtSbnXxnX2Saq+mjKoQGrBtRX+ksDNCc+VvAyQqPPBdkoGOZyeWntZ7xeicd3thsisXi4L/tKTijH+5fBCFGk7J7Kkov3YZxDrYqb9npYVbijKhnug+in8drbYVthdff2g+tldDYhodnea8HwyvSjMbD4Oh22TgOXGWEdiC8DIVhv/7GSv4dMVai+TDiC5nMes7mEcWybyfHTs0X9l2Kn/3ES0shAxr+wWBMa/sSKvT8PlX17zms/IzjbJaOuo76srexieSL2nIF3kX+GfPIRoUP4lXQoopy117OmKy//MynPx1xvzzoRugmldo+nEc4dKoZ81B8IwHwqVA5mZIpn39x6TORhSJbrsQ9VwOp+9zS6mLn9B94FT9WOZcAkdIi8WkqXTM7u6RrtLHGFL8SsVpMw9XdI+w0l8SH9gomaHDQpoIp8DMJlO0AGAE6rqU9LsTurEaiJLSLA0nfNDCagO9GHvuk4IHHLa6/CJ6EzkV1RhfKAVFZ0Du/yG1yAKrRbHnj8HFTCBAmpDWdGf3y+NwDIzVr1s/6JbGR1sdIskYkXPvWz7ZdOKrtrdoaVRPpp9mw2kpLWfQ4YAXhkI/hP8CdpAkpitBcHExA1ybzMSUIuTq86iPY6NzdnQLOZLgL/73vm7DfwxmGAvB6q2d6ai9fzTMvWxFaqaVKRW09EKYVb/+YS7TjdC1oHNlOi8s8Ud9aGo5e7Tdae3fBuS6Nps9TjmTmDAozswDXb4FU2DygTuPOPwBCC66LipvbwGjGCj4a37wxmgPYFJwJUFWo4kEJR2G5DUQK8UVkYygdqmTuWTSFLuTTg88Bxoy5/Cor8atZBTzjHBGm+e6alZ6YB/KHRKpF39xAzhEp9IJ/BguBuh6pZsDByQ7V7NKelkXgXNvs/+0eSgWpTQc7oVMgaEc9zfllUPffcWjrr33Rzg2mSYI3QVAUBSGXh/oXC7qAMKrlx2BR4Utq+7x/nAr7UwJgkBBGc7Ir8SYJnfdAzvmXUuxp52NDOiUADaVr50iE5AHqH8ROqZKSyyuKaeKgvNe8+2mK/DRgZrYKzK6qVncPfFSCjm3edi6qUQe2/jZl+TC5UJoXmx6HCht2UvzV/WbMkPFn1g9lHqU0asxxm0rMexhico4rnzHnIdItdRQxJ/6ZyTqPQHn6KrdI+CCd6uqWP8u1H6wfF4Zq/Rr9WkPKhIVAe/Fz2P6paH7/mYu1CSMDAUSAtgEwvS3ELfuhN+m3+u/0UHf44OkUx7yWK12yhsYr3grrtk61lcT7ZyhaVKf5OE/IAnN8h02/8QDX3byOBHpAeMwzX01/V5Urg7Gm52mNDBuWHWdGsFfZOXWAvpycqmzugEwvIB22tQg/7kGUH2oxrERj6cc1CDGGAe/P87aHrp5zxGTq9Y2hiGyenw4GKZxUx8XWnsFrxaGhOfkGut7UX9Y6rpwGteXKI5L4I1L16D+c6jtcvjFe78FjNsrUYhzXLyk+PA6pXXlJ2IF6OMZJaDBvcAOGgdMNO2R5r8JRX8FowcckSXcuXEsXroXtIuqADRciEh3Z70thv7qapi0elgeAY6+2UAqN6Y9EWuAKMjeMq3yC1wA/ViBtgmJUKBVsVlnD8ZDYwlKdUhXRgl7wJH6WOSnzLIF24pXj8j4PHhx9I/F4TsbGaM0Eg4RDjp4zEo+lfhHDDbvNcQkQ8j/oZ5sYJJXfH9B9nSfF0iVpFyGsJbjSxqAjjRBOzG16UmxYiCo8AwveK11csPHpbBke3y7dDh1k63it7CskrMPUljId0g8KN0E6Tvc65di28dzOMqdDNaoBBhvV/uu06MYAC3YAgW7eSdjkUhHuxtibTjWiLjQ8zowVMxltWonYTJKBtWVfcvDiYrMJKu1Tk6ufk9aNs6G9e+X8UjL/uKLA0U+L+JyvNWqCUpJpXkSI210xCtLfO2XLxesPV1SMlJDQoasw1efE8LsebbZ3TeG/Yax6lwa3p40xyI1w256mnZcIboGEaTM/h2poECFKvwQvAsxVBvMkYKOhi696E4TVvQPwR2fVLbzDM9kZfvuFn9hTgYwNpsfBEEKbFkpdPvaEuv7bdp8R5v3oHEWz+I46DEb5cE3+JjICtFdj1+gPTGnkSibBURQwu313wQVwq+K7k/guyS+okEzfBmc9IAmNAk4aqWwmC+haI622zNA1DHZf7zSE38zHeRiQCzq1JKpHPb0O6o9PRbAnILU1QyGLERFT4I+Op5ubniNWdUnjCMKAU6BKZB2+8fhgto1iMd60qnM/idbDfJGRNCxi4fkaR6uAC9adGn3Ke/oIDKZXTUwEjGxdywvSZxG6lw0FzKTxlwRvoi2TXaYOem7KS7VhLaZZ8tldfGGv309O0lUTfyuXAp21nshMNs4DtlGChsUSSmCinWpBhmnpCuSS4EfTmAcaKIqYw+ahEHbW4q2V6fbE3CfaRXfFCQpEHBGQbvnv4MeIKwE0wODDKtOGCwksBMmZ0LwXPvEXsRnjsH4kMzqX9DVNeBLhgVqTFY7EtpoL69xuAQB4j+TxiReKuPL9JFGqKvfxloRkzU9X6leLDIMz5zJnz+IltXsGRN+ZWEFcmBDpVNOzXR2TqPQf7QY+iTYSkf8+dOYmqWAGaF2VKo4s5r6zCOvc34+vOZO1ewf7n34D3rC2/VCqIj9yAyldGUNEbwU5l1HrGk4S5UsFe+WlH5nKdGk9zAPhZq+7go062eonA06kZJfb9UsYlwoh7jCuy8P3QrMb9pk9Cb8d3FUa845DYvo2qshvaqYusJNfHcUrlcUx8Sblh5X2tKgZeOAf0CYaib2bWx8mEQtdxVjs6pe4TDUc/XG88RYAJGgDen4ZmNUWFucpFjY4v8+AmK87sK07jeUKCU0uxQENYcfGu2Q9Xi2ErJAXvcFiq6VPtZN0vkGtHDkzf5oPz0fnMVuXpMFlgfxk8U88sAQSu9Km/w13xDuTrvvRDe1vOWaoq81wzePhU+AQJLH3Y7E+/E5ZwzLGm9hf7W4WRsa7+Q2ZpdkSppKrgUzro6JOEhy+kLJEH+3yRWW76x9KcK2TdIY8bOkaoWyIKsXuyb/t837eZ6nDqcMfne4rgomesn9lSPj2WjMI04iosWAUCuRHMhG9KCi5H4gD4IBJblXbvVuCAwbjUFm+c6gw+glWFIc5EANVidWY8l05ANjMiWQBeoK14AkNY4AnzF6n7T4iZmRwfBcT2cOaK5crxbDYZHZVLAe422WCcMZFS456DAkycKpEa4tn7xZ/0snMnCgdMw7aEO3OYp2NqCQ9pzwt/QLnUKg10B/l92w1vnzp6NNioMQ35pTpvBFkon1sI9CHQSDAsqq6EafZ3O/sTHNGFulOVXiAOP9wSaLxHMqCga6EwRo932GuwMydrI3f8r6h/h1PZJBm2yAAAA'

const partners = [
  {
    name: 'Revival 1869',
    location: 'Clayton, NC',
    image: revivalImage,
    alt: 'Inside Revival 1869 in Clayton North Carolina',
    description:
      'A polished downtown Clayton cocktail lounge with historic character, warm lighting, craft cocktails, and a cozy place to gather after a ride.',
    mapQuery: 'Revival 1869 222 E Main St Clayton NC',
  },
  {
    name: "Vinson's Pub + Eatery",
    location: 'Clayton, NC',
    image: vinsonImage,
    alt: "Vinson's Pub and Eatery in Clayton North Carolina",
    description:
      'A local Clayton pub and eatery with a relaxed neighborhood feel, approachable food, drinks, and an easygoing place to unwind before or after an adventure.',
    mapQuery: "Vinson's Pub + Eatery Clayton NC",
  },
]

const Partners = () => {
  return (
    <section className="partners--section">
      <div className="container">
        <div className="text-center partners--header">
          <p className="tours--subtitle">Local favorites</p>
          <div className="tours--title">
            <h3>Our <span>Partners</span></h3>
          </div>
          <p className="partners--intro">
            Make your Triangle Adventures day even better with a stop at two Clayton favorites we are proud to highlight.
          </p>
        </div>

        <div className="partners--grid">
          {partners.map((partner) => (
            <article className="partner--card" key={partner.name}>
              <div className="partner--image-wrap">
                <img src={partner.image} alt={partner.alt} loading="lazy" className="partner--image" />
              </div>

              <div className="partner--content">
                <span className="partner--location">{partner.location}</span>
                <h4>{partner.name}</h4>
                <p>{partner.description}</p>
              </div>

              <div className="partner--map-wrap">
                <iframe
                  title={`${partner.name} map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(partner.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
