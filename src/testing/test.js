<CardContent>
                <Heading>{character.name}</Heading>
                <Text>Actor:{character.actor}</Text>
                <Text>House:{character.house}</Text>
                <Text>Father:{character.father}</Text>
                <Text>
                  Titles:
                  {character.titles.map((title) => {
                    if (
                      title.includes("Baratheon") ||
                      title.includes("Stark") ||
                      title.includes("Targaryen")
                    )
                      return;
                    else
                      return (
                        <span>
                          {title}
                          <br />
                        </span>
                      );
                  })}
                </Text>
              </CardContent>